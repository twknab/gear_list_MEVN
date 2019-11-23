const GearItem = require("mongoose").model("GearItem"),
  GearList = require("mongoose").model("GearList"),
  User = require("mongoose").model("User"),
  GearItemComplete = require("mongoose").model("GearItemComplete");

module.exports = {
  createGearItem: (req, res) => {
    console.log("🤞  Attemping to Create New Gear Item...");
    GearItem.create(req.body)
      .then(newGearItem => {
        console.log("👍  New Gear Item Successfully Created.");
        // Add Gear Item to User:
        User.findByIdAndUpdate(
          req.session.userId,
          {
            $push: { gearItems: newGearItem._id }
          },
          {
            upsert: true,
            new: true
          }
        )
          .then(foundUser => {
            console.log(`Gear Item added to User: ${foundUser}`);
            let gearItemCompleteData = {
              item: newGearItem._id,
              itemCompleteOwner: foundUser._id
            };
            GearItemComplete.create(gearItemCompleteData)
              .then(() => {
                // Note: No need to send back the gear item here since when we load the dashboard/gear item list, we'll retrieve them all
                return res.status(201).json({ success: "success" });
              })
              .catch(error => {
                console.log(error);
                error = {
                  errors: {
                    invalid: {
                      message:
                        "Error creating new Gear Item Complete (gear-item-controller.createGearItem), contact the admin."
                    }
                  }
                };
                return res.status(403).json(error.errors);
              });
          })
          .catch(error => {
            console.log(error);
            error = {
              errors: {
                invalid: {
                  message:
                    "Error creating new Gear Item (gear-item-controller.createGearItem), contact the admin."
                }
              }
            };
            return res.status(403).json(error.errors);
          });
      })
      .catch(error => {
        console.log("😬  Error Creating New Gear Item:");
        console.log(error);
        return res.status(500).json(error.errors);
      });
  },
  getUserGearItems: (req, res) => {
    console.log("🤞 Getting logged in User's Gear Items...");
    User.findOne({
      _id: req.session.userId
    })
      .populate({
        path: "gearItems",
        options: {
          sort: "-createdAt"
        }
      })
      .exec()
      .then(userAndGearItems => {
        return res.status(201).json(userAndGearItems);
      })
      .catch(error => {
        console.log(error);
        error = {
          errors: {
            invalid: {
              message:
                "Error getting User's items (gear-item-controller.getUserGearItems), contact the admin."
            }
          }
        };
        return res.status(500).json(error.errors);
      });
  },
  deleteGearItem: (req, res) => {
    console.log("🗑 Deleting Gear Item...");
    GearList.update(
      {},
      {
        $pull: { items: req.query.gearItemId }
      },
      {
        multi: true
      }
    )
      .then(() => {
        GearItem.deleteOne({
          _id: req.query.gearItemId
        })
          .then(() => {
            return res
              .status(201)
              .json({ successMessage: "Item successfully deleted!" });
          })
          .catch(error => {
            console.log(error);
            const errors = ["Could not delete item"];
            return res.status(500).json(errors);
          });
      })
      .catch(err => {
        console.log(err);
      });
  }
};
