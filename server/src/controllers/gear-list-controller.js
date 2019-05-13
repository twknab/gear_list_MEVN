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
    console.log("🤞  Adding Item to User's Gear List(s)...");
    console.log("---- BODY REC'VD ----");
    console.log(req.body);

    /*
    /*  TODO:
    /*  - Get Gear Item
    /*  - For Each Gear List in Array:
    /*    - Add Gear Item to List
    /*    - Save Each Gear List
    */

    GearItem.findOne({
      _id: req.body.gearItemId
    })
      .then(gearItem => {
        console.log(gearItem);
        req.body.gearListsIds.forEach(gearListId => {
          console.log("ITEM: ", gearListId);
          GearList.findOneAndUpdate(
            { _id: gearListId },
            {
              $push: {
                items: gearItem._id
              }
              // TODO: Ensure DUPLICATES DO NOT GET PUSHED
              // QUESTION: CHECK IF OWNER??? (Yes probably: consider just checking if req.session.userId etc === gearListOwnerId)
            },
            { $new: true }
          )
            .then(gearList => {
              console.log(gearList);
            })
            .catch(error => {
              console.log(error);
              error = {
                errors: {
                  invalid: {
                    message: "Error getting gear list, contact the admin."
                  }
                }
              };
              return res.status(500).json(error.errors);
            });
        });
        return res.status(500);
      })
      .catch(error => {
        console.log(error);
        error = {
          errors: {
            invalid: {
              message: "Error getting gear item, contact the admin."
            }
          }
        };
        return res.status(500).json(error.errors);
      });

    // DELETE THIS BELOW BUT USE IT AS A MODEL TO WRITE YOUR NEW LOGIC
    // User.findOne({
    //   _id: req.session.userId
    // })
    //   .populate({
    //     path: "gearLists",
    //     options: {
    //       sort: "-createdAt"
    //     }
    //   })
    //   .exec()
    //   .then(userAndGearLists => {
    //     return res.status(201).json(userAndGearLists);
    //   })
    //   .catch(error => {
    //     console.log(error);
    //     error = {
    //       errors: {
    //         invalid: {
    //           message:
    //             "Error getting User's gear lists (gear-list-controller.getUserGearLists), contact the admin."
    //         }
    //       }
    //     };
    //     return res.status(500).json(error.errors);
    //   });
  }
};
