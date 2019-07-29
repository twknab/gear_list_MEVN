const GearList = require("mongoose").model("GearList"),
  User = require("mongoose").model("User");
// GearItem = require("mongoose").model("GearItem");

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
  attachItem: (req, res) => {
    console.log("📎 Adding items to Gear Lists...");
    GearList.schema.methods.attachToLists(
      req.body.gearItemId,
      req.body.itemSavedListsIds,
      req.body.itemSelectedListIds,
      attachCallback
    );

    function attachCallback(result) {
      if (result.success) {
        result.successMessage = `Successfully updated all Gear Item attachments!`;
        return res.status(201).json(result);
      }
      // error
      return res.json(result);
    }
  },
  getGearListsBelongingToItem: (req, res) => {
    console.log("🤞  Getting Gear Lists belonging to Gear Item...");
    GearList.find({ items: { $all: [req.query.gearItemId] } })
      .then(lists => {
        res.status(200).json(lists);
      })
      .catch(err => {
        console.log("Error getting lists for this gear item: ", err);
        res.status(500).json(err);
      });
  }
};
