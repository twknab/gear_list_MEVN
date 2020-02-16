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
            result.successMessage = `Item successfully added to all lists!`;
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
      GearList.findOne({ _id: gearListId })
        .populate({
          path: "items"
        })
        .exec()
        .then(listAndItems => {
          // Map existing item ids for diff'ing
          let existingItems = listAndItems.items;
          let existingItemsIds = existingItems.map(item => item._id);
          GearList.schema.methods.attachManyItemsToOneList(
            gearListId,
            existingItemsIds,
            req.body.selectedListIds,
            // callback function as argument
            function(result) {
              if (result.success) {
                result.successMessage = `Items successfully added!`;
                return res.status(200).json(result);
              }
              // error
              return res.json(result);
            }
          );
        })
        .catch(err => {
          console.log(err);
          res.status(500).json(err);
        });
    }
  },
  removeGearItemFromList: (req, res) => {
    if (UserController.isAuthenticated(req, res)) {
      const gearListId = req.body.listId;
      const gearItemId = req.body.itemId;
      // Lookup list and pull item from items array
      GearList.findOneAndUpdate(
        { _id: gearListId },
        {
          $pull: { items: gearItemId }
        }
      )
        .then(() => {
          // delete compltion data
          GearItemCompletionData.findOneAndDelete({
            gearItem: gearItemId,
            gearList: gearListId
          })
            .then(() => {
              return res.status(200).json({ success: true });
            })
            .catch(err => {
              return res.status(500).json(err);
            });
        })
        .catch(err => {
          return res.status(500).json(err);
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
