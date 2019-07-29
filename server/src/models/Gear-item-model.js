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
      maxlength: [16000, "Weight cannot exceed 16000 ozs (1000 lbs)."],
      required: [true, "Weight is required."],
      trim: true
    },
    gearItemOwner: {
      type: Schema.Types.ObjectId,
      ref: "User"
    },
    listsComplete: [
      {
        // holds lists this item is complete for
        type: Schema.Types.ObjectId,
        ref: "GearList"
      }
    ]
  },
  {
    timestamps: true
  }
);

// These functions run prior to document validation
GearItemSchema.pre("validate", function(next) {
  console.log("Do something before validation here..");
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
