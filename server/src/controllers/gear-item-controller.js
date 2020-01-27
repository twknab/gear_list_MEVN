const mongoose = require("mongoose"),
  GearItem = mongoose.model("GearItem"),
  GearList = mongoose.model("GearList"),
  GearItemCompletion = mongoose.model("GearItemCompletion"),
  User = mongoose.model("User");

module.exports = {
  createGearItem: (req, res) => {
    GearItem.create(req.body)
      .then(newGearItem => {
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
          .then(() => {
            return res.status(201).json({ success: "success" });
          })
          .catch(error => {
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
        return res.status(500).json(error.errors);
      });
  },
  getUserGearItems: (req, res) => {
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
            GearItemCompletion.deleteMany({
              gearItem: req.query.gearItemId
            })
              .then(() => {
                return res
                  .status(201)
                  .json({ successMessage: "Item successfully deleted!" });
              })
              .catch(() => {
                const errors = ["Could not delete item"];
                return res.status(500).json(errors);
              });
          })
          .catch(() => {
            const errors = ["Could not delete item"];
            return res.status(500).json(errors);
          });
      })
      .catch(err => {
        throw err;
      });
  },
  changeCompleteStatus: (req, res) => {
    const gearItemId = req.query.gearItemId;
    const gearListId = req.query.gearListId;
    const gearCompletedStatus = req.query.gearCompletedStatus;

    console.log("COMPLETED STATUS", gearCompletedStatus);

    GearItemCompletion.findOneAndUpdate(
      {
        gearList: gearListId,
        gearItem: gearItemId
      },
      {
        completed: gearCompletedStatus
      }
    )
      .then(updatedCompletionData => {
        console.log("HERE IS COMPLETION OBJECT:", updatedCompletionData);
        res.status(200).json(updatedCompletionData);
      })
      .catch(error => {
        console.log(error);
        error = {
          errors: {
            invalid: {
              message: "Error updating item's completion status."
            }
          }
        };
        return res.status(403).json(error.errors);
      });
  }
};
