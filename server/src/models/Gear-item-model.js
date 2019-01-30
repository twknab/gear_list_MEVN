const mongoose = require("mongoose"),
  Schema = mongoose.Schema;

// Setup a schema:
const GearItemSchema = new Schema(
  {
    title: {
      type: String,
      minlength: [2, "Title must be 2-50 characters."],
      maxlength: [50, "Title must be 2-50 characters."],
      required: [true, "Title is required."],
      trim: true
    },
    weight: {
      type: Number,
      maxlength: [1600, "Weight cannot exceed 1600 ozs (100 lbs)."],
      required: [true, "Weight is required."],
      trim: true
    }
  },
  {
    timestamps: true
  }
);

// These functions run prior to document validation
GearItemSchema.pre("validate", function(next) {
  console.log("Do something before validatioj here..");
  next();
});

// These functions run prior to document save()
GearItemSchema.pre("save", function(next) {
  console.log("Do something before save here...");
  next();
});

// Invoke our model using our schema and export
const GearItem = mongoose.model("GearItem", GearItemSchema);
module.exports = GearItem;
