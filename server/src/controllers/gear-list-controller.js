const GearList = require("mongoose").model("GearList"),
  GearItemCompletion = require("mongoose").model("GearItemCompletion"),
  User = require("mongoose").model("User");

module.exports = {
  createGearList: (req, res) => {
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
  },
  getUserGearLists: (req, res) => {
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
    // TODO: Refacator Gear List completion to:
    // A) Delete gearItemCompletion data for that List
    //   - you can prbably delete or rework the `unmarkListItemsAsComplete`
    // B) Delete the list itself
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
          .catch(() => {
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
        res.status(500).json(err);
      });
  },
  getGearListAndAllItemCompletions: (req, res) => {
    GearList.findOne({ _id: req.body.gearListId })
      .populate({
        path: "items"
      })
      .exec()
      .then(listAndItems => {
        GearItemCompletion.schema.methods.getOrCreateItemCompletionData(
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
};
