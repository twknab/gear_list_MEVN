const mongoose = require("mongoose"),
  GearItemCategory = mongoose.model("GearItemCategory"),
  UserController = require("./user-controller"),
  User = mongoose.model("User");

module.exports = {
  createGearItemCategory: (req, res) => {
    if (UserController.isAuthenticated(req, res)) {
      GearItemCategory.schema.methods.validateCategoryTitleDoesNotAlreadyExistForUser(
        req.session.userId,
        req.body.title,
        result => {
          if (result.success) {
            GearItemCategory.create(req.body)
              // eslint-disable-next-line no-unused-vars
              .then(newGearItemCategory => {
                // Add Gear Item Category to User:
                User.findByIdAndUpdate(
                  req.session.userId,
                  {
                    $push: {
                      gearItemCategories: newGearItemCategory._id
                    }
                  },
                  {
                    upsert: true,
                    new: true
                  }
                )
                  .then(() => {
                    return res.status(201).json({
                      success: "success"
                    });
                  })
                  .catch(error => {
                    error = {
                      errors: {
                        invalid: {
                          message:
                            "Error creating new Gear Item Category, contact the admin."
                        }
                      }
                    };
                    return res.status(403).json(error.errors);
                  });
              })
              .catch(error => {
                return res.status(500).json(error.errors);
              });
          } else {
            console.log(result.error);
            return res.status(500).json(result.error);
          }
        }
      );
    }
  },
  getUserGearItemCategories: (req, res) => {
    if (UserController.isAuthenticated(req, res)) {
      User.findOne({
        _id: req.session.userId
      })
        .populate({
          path: "gearItemCategories",
          options: {
            sort: "-createdAt"
          }
        })
        .exec()
        .then(userAndGearItemCategories => {
          return res.status(201).json(userAndGearItemCategories);
        })
        .catch(error => {
          error = {
            errors: {
              invalid: {
                message:
                  "Error getting User's item categories (gear-item-category-controller.getUserGearItemCategories), contact the admin."
              }
            }
          };
          return res.status(500).json(error.errors);
        });
    }
  },
  getGearItemCategory: (req, res) => {
    if (UserController.isAuthenticated(req, res)) {
      GearItemCategory.findOne({ _id: req.query.gearItemCategoryId })
        .then(gearItemCategory => {
          res.status(200).json(gearItemCategory);
        })
        .catch(err => {
          res.status(500).json(err);
        });
    }
  },
  updateGearItemCategory: (req, res) => {
    if (UserController.isAuthenticated(req, res)) {
      GearItemCategory.findOneAndUpdate(
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
                message:
                  "Error updating User's gear item category, contact the admin."
              }
            }
          };
          return res.status(500).json(error.errors);
        });
    }
  },
  deleteGearItemCategory: (req, res) => {
    if (UserController.isAuthenticated(req, res)) {
      GearItemCategory.deleteOne({
        _id: req.query.gearItemCategoryId
      })
        .then(() => {
          return res.status(201).json({ successMessage: "Done!" });
        })
        .catch(() => {
          const errors = ["Could not delete item category"];
          return res.status(500).json(errors);
        });
    }
  }
};
