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
    // PROBABLY BETTER TO MODULARIZE PUT THIS INTO MODEL
    let error = { errors: {} },
      gearListsAlreadyContainingItem = [],
      gearListSuccessfulAttach = [];
    // Find gear item
    GearItem.findOne({
      _id: req.body.gearItemId
    })
      .then(gearItem => {
        // Loop through each gear gear list provided by user and look them up
        req.body.gearListsIds.forEach(gearListId => {
          GearList.findById(gearListId).then(gearList => {
            // Validate if user is gear list owner before updating
            if (gearList.gearListOwner != req.session.userId) {
              error.errors.notOwner = {
                message: "Only the Gear List Owner can add Items to this List."
              };
            }
            // Loop through all items in gear list to add to - check if any items already exist in list

            //////////////////////////////////////////////////////////////////////////
            //////////////////////////// ERROR ZONE--BUGS ////////////////////////////
            //////////////////////////////////////////////////////////////////////////

            if (gearList.items.length) {
              gearList.items.forEach(itemId => {
                if (String(itemId) == String(gearItem._id)) {
                  gearListsAlreadyContainingItem.push(gearList.title);
                }
              });
            }
            // If any errors found send them
            if (gearListsAlreadyContainingItem.length) {
              // What's happening here is that the looping does not finish before the res.status.json success sends, (and actually ends up sending 2x)
              // To resolve the promise issue, you need to ensure that the status is only sent back 1x
              // And that the looping finishes to gather the entire sentence before sending it back
              let alreadyAdded = "";
              let i = 0;
              while (i < gearListsAlreadyContainingItem.length) {
                console.log("RUNNING " + i);
                i++;
              }
              console.log(gearListsAlreadyContainingItem);
              for (let i = 0; i < gearListsAlreadyContainingItem.length; i++) {
                if (i === gearListsAlreadyContainingItem.length - 1) {
                  alreadyAdded += gearListsAlreadyContainingItem[i] + ".";
                  error.errors.alreadyExists = {
                    message: "Gear Item already attached to: " + alreadyAdded
                  };
                } else {
                  alreadyAdded += gearListsAlreadyContainingItem[i] + ", ";
                }
              }
            }

            if (Object.keys(error.errors).length > 0) {
              console.log("ERRORS: ", error.errors);
              return res.status(500).json(error.errors);
            } else {
              // If succcessful, add gear item to list, add list name to success array
              gearList.items.push(gearItem._id);
              gearList.save();
              // CATCH BLOCK GO HERE???
              gearListSuccessfulAttach.push(gearList.title);
              let gearListsSuccessfullyAdded = "";
              for (let i = 0; i < gearListSuccessfulAttach.length; i++) {
                if (i === gearListSuccessfulAttach.length - 1) {
                  gearListsSuccessfullyAdded += gearListSuccessfulAttach[i];
                } else {
                  gearListsSuccessfullyAdded +=
                    gearListSuccessfulAttach[i] + ", ";
                }
              }
              // TODO: WHY IS SUCCESS MESSAGE NOT FULLY SENDING?
              // WHY `UnhandledPromiseRejection`?
              console.log("SUCCESSFULLY ADDED: ", gearListsSuccessfullyAdded);
              return res.status(201).json({
                successMessage: `Successfully added ${
                  gearItem.title
                } to ${gearListsSuccessfullyAdded}!`
              });
            }

            //////////////////////////////////////////////////////////////////////////
            ////////////////////////// END RROR ZONE--BUGS ///////////////////////////
            //////////////////////////////////////////////////////////////////////////
          });
        });
      })
      .catch(error => {
        error = {
          errors: {
            dbInvalid: {
              message: "Error finding gear item, contact the admin."
            }
          }
        };
        return res.status(500).json(error.errors);
      });
  }
};
