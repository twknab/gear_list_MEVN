const GearList = require("mongoose").model("GearList"),
  GearItemCompletionData = require("mongoose").model("GearItemCompletionData"),
  UserController = require("./user-controller"),
  User = require("mongoose").model("User");

module.exports = {
  createGearList: (req, res) => {
    if (UserController.isAuthenticated(req, res)) {
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
          return res.status(500).json(error.errors);
        });
    }
  },
  getUserGearLists: (req, res) => {
    if (UserController.isAuthenticated(req, res)) {
      User.findOne({
        _id: req.session.userId
      })
        .populate({
          path: "gearLists",
          options: {
            sort: "-updatedAt"
          }
        })
        .exec()
        .then(userAndGearLists => {
          return res.status(201).json(userAndGearLists);
        })
        .catch(error => {
          error = {
            errors: {
              invalid: {
                message: "Error getting User's gear lists, contact the admin."
              }
            }
          };
          return res.status(500).json(error.errors);
        });
    }
  },
  updateGearList: (req, res) => {
    if (UserController.isAuthenticated(req, res)) {
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
          error = {
            errors: {
              invalid: {
                message: "Error updating User's gear list, contact the admin."
              }
            }
          };
          return res.status(500).json(error.errors);
        });
    }
  },
  deleteGearList: (req, res) => {
    if (UserController.isAuthenticated(req, res)) {
      GearItemCompletionData.find({ gearList: req.query.gearListId })
        .remove()
        .exec()
        .then(() => {
          GearList.findOneAndDelete({
            _id: req.query.gearListId
          })
            .then(() => {
              return res
                .status(201)
                .json({ successMessage: "List successfully deleted!" });
            })
            .catch(() => {
              const errors = ["Could not delete list"];
              return res.status(500).json(errors);
            });
        })
        .catch(err => {
          console.log("Something went wrong finding completion data");
          console.log(err);
        });
    }
  },
  attachOneItemToManyLists: (req, res) => {
    if (UserController.isAuthenticated(req, res)) {
      GearList.schema.methods.attachOneItemToManyLists(
        req.body.gearItemId,
        req.body.itemSavedListsIds,
        req.body.itemSelectedListIds,
        // callback function as argument
        function(result) {
          if (result.success) {
            result.successMessage = `Successfully updated all Gear Item attachments!`;
            return res.status(201).json(result);
          }
          // error
          return res.json(result);
        }
      );
    }
  },
  attachManyItemsToSingleList: (req, res) => {
    if (UserController.isAuthenticated(req, res)) {
      let gearListId = req.body.gearListId;
      console.log("hello");
      GearList.findOne({ _id: gearListId })
        .populate({
          path: "items"
        })
        .exec()
        .then(listAndItems => {
          console.log("I GOT THE ITEMS");
          // TODO: Map existing item ids into array
          // TODO: Pass into model method you built
          // TODO: Pass back the resuluts
          // TODO: Bonus points -- refactor your other "diff" feature, right now it uses 2 gearlist services (see if the first one being used is necessary for existing features)
          console.log(listAndItems);
          res.status(200).json(listAndItems);
        })
        .catch(err => {
          res.status(500).json(err);
        });
    }
  },
  getGearListsBelongingToItem: (req, res) => {
    if (UserController.isAuthenticated(req, res)) {
      GearList.find({ items: { $all: [req.query.gearItemId] } })
        .then(lists => {
          res.status(200).json(lists);
        })
        .catch(err => {
          res.status(500).json(err);
        });
    }
  },
  getGearListAndAllItems: (req, res) => {
    if (UserController.isAuthenticated(req, res)) {
      let gearListId = req.query.gearListId;
      GearList.findOne({ _id: gearListId })
        .populate({
          path: "items"
        })
        .exec()
        .then(listAndItems => {
          res.status(200).json(listAndItems);
        })
        .catch(err => {
          res.status(500).json(err);
        });
    }
  },
  getGearListAndAllItemCompletions: (req, res) => {
    if (UserController.isAuthenticated(req, res)) {
      GearList.findOne({ _id: req.body.gearListId })
        .populate({
          path: "items"
        })
        .exec()
        .then(listAndItems => {
          GearItemCompletionData.schema.methods.getOrCreateItemCompletionData(
            listAndItems,
            req.body.gearListId,
            // callback function
            resultData => {
              if (resultData.success === false) {
                res.status(500).json(resultData.error);
              } else {
                res.status(200).json({
                  itemCompletions: resultData.items,
                  listName: listAndItems.title,
                  listId: listAndItems._id
                });
              }
            }
          );
        })
        .catch(err => {
          res.status(500).json(err);
        });
    }
  }
};
