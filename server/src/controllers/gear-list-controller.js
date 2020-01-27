const GearList = require("mongoose").model("GearList"),
  GearItemCompletion = require("mongoose").model("GearItemCompletion"),
  User = require("mongoose").model("User");

module.exports = {
  createGearList: (req, res) => {
    console.log("🤞  Attemping to Create New Gear List...");
    GearList.create(req.body)
      .then(newGearList => {
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
          .then(() => {
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
  updateGearList: (req, res) => {
    GearList.findOneAndUpdate(
      {
        _id: req.body._id
      },
      { title: req.body.title }
    )
      .then(() => {
        return res.status(201).json({ success: "success" });
      })
      .catch(error => {
        console.log(error);
        error = {
          errors: {
            invalid: {
              message: "Error updating User's gear list, contact the admin."
            }
          }
        };
        return res.status(500).json(error.errors);
      });
  },
  deleteGearList: (req, res) => {
    console.log("DELETING");
    GearList.schema.methods.unmarkListItemsAsComplete(
      req.query.gearListId,
      (err = null) => {
        if (err !== null) {
          const errors = ["Could not unmark all items"];
          return res.status(500).json(errors);
        }
        GearList.findOneAndDelete({
          _id: req.query.gearListId
        })
          .then(() => {
            return res
              .status(201)
              .json({ successMessage: "List successfully deleted!" });
          })
          .catch(error => {
            console.log(error);
            const errors = ["Could not delete list"];
            return res.status(500).json(errors);
          });
      }
    );
  },
  attachItem: (req, res) => {
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
    GearList.find({ items: { $all: [req.query.gearItemId] } })
      .then(lists => {
        res.status(200).json(lists);
      })
      .catch(err => {
        console.log("Error getting lists for this gear item: ", err);
        res.status(500).json(err);
      });
  },
  getGearListAndAllItems: (req, res) => {
    GearList.findOne({ _id: req.query.gearListId })
      .populate({
        path: "items"
      })
      .exec()
      .then(listAndItems => {
        res.status(200).json(listAndItems);
      })
      .catch(err => {
        console.log("Error getting list and items for this gear list.", err);
        res.status(500).json(err);
      });
  },
  getGearListAndAllItemCompletions: (req, res) => {
    console.log("GETTING ITEM COMPLETIONS....");
    console.log(req.body.gearListId);
    GearList.findOne({ _id: req.body.gearListId })
      .populate({
        path: "items"
      })
      .exec()
      .then(listAndItems => {
        console.log("got list and items.");
        console.log("checking list items for completion...");
        GearItemCompletion.schema.methods.makeItemCompletionData(
          listAndItems,
          req.body.gearListId,
          // callback function
          result => {
            console.log("Callback function running...");
            console.log(result);
          }
        );
      })
      .catch(err => {
        console.log("Error getting lists for this gear item: ", err);
        res.status(500).json(err);
      });
  }
};
