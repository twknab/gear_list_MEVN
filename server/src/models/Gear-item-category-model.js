const mongoose = require("mongoose"),
  Schema = mongoose.Schema;

const GearItemCategorySchema = new Schema(
  {
    title: {
      type: String,
      minlength: [2, "Title must be 2-50 characters."],
      maxlength: [50, "Title must be 2-50 characters."],
      required: [true, "Title is required."],
      trim: true
    },
    gearItems: [
      {
        type: Schema.Types.ObjectId,
        ref: "GearItem"
      }
    ],
    gearItemCategoryOwner: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true
    }
  },
  {
    timestamps: true
  }
);

// Ensure title on a category does not already exist for user
GearItemCategorySchema.methods.validateCategoryTitleDoesNotAlreadyExistForUser = function(
  userId,
  desiredTitle,
  callback
) {
  GearItemCategory.find({ title: desiredTitle, gearItemCategoryOwner: userId })
    .then(function(categories) {
      if (Object.entries(categories).length > 0) {
        const err = {
          invalid: {
            message: "Category title must be unique."
          }
        };
        callback({ success: false, error: err });
      } else {
        callback({ success: true });
      }
    })
    .catch(function(err) {
      callback({ success: false, error: err });
    });
};

const GearItemCategory = mongoose.model(
  "GearItemCategory",
  GearItemCategorySchema
);
module.exports = GearItemCategory;
