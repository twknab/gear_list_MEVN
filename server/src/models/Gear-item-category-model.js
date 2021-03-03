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
    owner: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true
    }
  },
  {
    timestamps: true
  }
);

const GearItemCategory = mongoose.model(
  "GearItemCategory",
  GearItemCategorySchema
);
module.exports = GearItemCategory;
