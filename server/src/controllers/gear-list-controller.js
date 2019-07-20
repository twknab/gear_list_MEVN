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
    console.log("🤞  Adding items to Gear Lists...");
    GearList.schema.methods.validateAddItems(
      req.body.gearListsIds,
      req.body.gearItemId,
      addItemsCallback
    );

    function addItemsCallback(result) {
      console.log("2. RETURNED FROM MODEL", result);
    }

    // if (addItemsToListsValidation.success) {
    //   console.log("SUCCESS");
    //   return res.status(201).json({
    //     successMessage: `Success adding to list(s)!`
    //   });
    // }
    // return res.status(400).json(addItemsToListsValidation.errors);

    // console.log("THIS IS ALREADY ADDED, ", alreadyAdded);
    // // Find gear item
    // GearItem.findOne({
    //   _id: req.body.gearItemId
    // })
    //   .then(gearItem => {
    //     // Grab all gear lists submitted
    //     GearList.find({
    //       _id: {
    //         $in: req.body.gearListIds
    //       }
    //     })
    //       .then(gearLists => {
    //         // validate owner?
    //         // do resolve stuff
    //       })
    //       .catch(err => {
    //         // do error stuff
    //       });
    //     req.body.gearListsIds.forEach(gearListId => {
    //       GearList.findById(gearListId).then(gearList => {
    //         // If succcessful, add gear item to list, add list name to success array
    //         gearList.items.push(gearItem._id);
    //         gearList.save();
    //         // CATCH BLOCK GO HERE???
    //         gearListSuccessfulAttach.push(gearList.title);
    //         let gearListsSuccessfullyAdded = "";
    //         for (let i = 0; i < gearListSuccessfulAttach.length; i++) {
    //           if (i === gearListSuccessfulAttach.length - 1) {
    //             gearListsSuccessfullyAdded += gearListSuccessfulAttach[i];
    //           } else {
    //             gearListsSuccessfullyAdded +=
    //               gearListSuccessfulAttach[i] + ", ";
    //           }
    //         }
    //         return res.status(201).json({
    //           successMessage: `Successfully added ${
    //             gearItem.title
    //           } to ${gearListsSuccessfullyAdded}!`
    //         });

    //         //////////////////////////////////////////////////////////////////////////
    //         ////////////////////////// END RROR ZONE--BUGS ///////////////////////////
    //         //////////////////////////////////////////////////////////////////////////
    //       });
    //     });
    //   })
    //   .catch(error => {
    //     error = {
    //       errors: {
    //         dbInvalid: {
    //           message: "Error finding gear item, contact the admin."
    //         }
    //       }
    //     };
    //     return res.status(500).json(error.errors);
    //   });
  }
};
