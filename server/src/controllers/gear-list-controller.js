const GearList = require("mongoose").model("GearList"),
  User = require("mongoose").model("User"),
  GearItem = require("mongoose").model("GearItem");

module.exports = {
  createGearList: (req, res) => {
    console.log("🤞  Attemping to Create New Gear List...");
    GearList.create(req.body)
      .then(newGearList => {
        console.log("👍  New Gear List Successfully Created.");
        // Add Gear List to User:
        User.findByIdAndUpdate(
          req.session.userId,
          {
            $push: { gearLists: newGearList._id }
          },
          {
            upsert: true,
            new: true
          }
        )
          .then(foundUser => {
            console.log(`Gear List added to User: ${foundUser}`);
            return res.status(201).json({ success: "success" });
          })
          .catch(error => {
            console.log(error);
            error = {
              errors: {
                invalid: {
                  message: "Error creating new Gear List, contact the admin."
                }
              }
            };
            return res.status(403).json(error.errors);
          });
      })
      .catch(error => {
        console.log("😬  Error Creating New Gear List:");
        console.log(error);
        return res.status(500).json(error.errors);
      });
  },
  getUserGearLists: (req, res) => {
    console.log("🤞  Getting logged in User's Gear Lists...");
    User.findOne({
      _id: req.session.userId
    })
      .populate({
        path: "gearLists",
        options: {
          sort: "-createdAt"
        }
      })
      .exec()
      .then(userAndGearLists => {
        return res.status(201).json(userAndGearLists);
      })
      .catch(error => {
        console.log(error);
        error = {
          errors: {
            invalid: {
              message: "Error getting User's gear lists, contact the admin."
            }
          }
        };
        return res.status(500).json(error.errors);
      });
  },
  addItemToGearLists: (req, res) => {
    let error = { errors: {} };
    GearItem.findOne({
      _id: req.body.gearItemId
    })
      .then(gearItem => {
        req.body.gearListsIds.forEach(gearListId => {
          GearList.findById(gearListId)
            .then(gearList => {
              gearList.items.forEach(itemId => {
                console.log(itemId);
                if (String(itemId) == String(gearItem._id)) {
                  error.errors[gearList._id] = {
                    message: `Gear Item already in attached list: ${
                      gearList.title
                    }`
                  };
                }
              });
              if (gearList.gearListOwner != req.session.userId) {
                error.errors.nowOwner = {
                  message:
                    "Only the Gear List owner can add items to this list."
                };
              }
              // if any errors:
              if (Object.keys(error.errors).length > 0) {
                console.log(error.errors);
                return res.status(500).json(error.errors);
                // throw "noope";
              }
            })
            .catch(error => {
              error.errors = {
                invalid: {
                  message: "Error getting gear list, contact the admin."
                }
              };
              return res.status(500).json(error.errors);
            });
          GearList.findOneAndUpdate(
            { _id: gearListId },
            {
              $addToSet: {
                items: gearItem._id
              }
              // TODO:
              // VALIDATION: CHECK IF OWNER??? (Yes probably: consider just checking if req.session.userId etc === gearListOwnerId)
              // VALIDATION: SEND ERROR IF ITEM ALREADY ON A LIST
            },
            { $new: true }
          )
            .then(() => {
              return res.status(201).json({
                successMessage: `Successfully added ${
                  gearItem.title
                } to your list(s)!`
              });
            })
            .catch(error => {
              error.errors = {
                invalid: {
                  message: "Error getting gear list, contact the admin."
                }
              };
              return res.status(500).json(error.errors);
            });
        });
        return res.status(500);
      })
      .catch(error => {
        error = {
          errors: {
            invalid: {
              message: "Error getting gear item, contact the admin."
            }
          }
        };
        return res.status(500).json(error.errors);
      });
  }
};
