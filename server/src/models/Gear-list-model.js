const mongoose = require("mongoose"),
  Schema = mongoose.Schema;

// Setup a schema:
const GearListSchema = new Schema(
  {
    title: {
      type: String,
      minlength: [2, "Title must be 2-50 characters."],
      maxlength: [50, "Title must be 2-50 characters."],
      required: [true, "Title is required."],
      trim: true
    },
    items: [
      {
        // holds gear items added to list
        type: Schema.Types.ObjectId,
        ref: "GearItem"
      }
    ],
    gearListOwner: {
      type: Schema.Types.ObjectId,
      ref: "User"
    }
  },
  {
    timestamps: true
  }
);

// These functions run prior to document validation
GearListSchema.pre("validate", function(next) {
  console.log("Do something before validation here..");
  next();
});

// These functions run prior to document save()
GearListSchema.pre("save", function(next) {
  console.log("Do something before save here...");
  next();
});

// Invoke our model using our schema and export
const GearList = mongoose.model("GearList", GearListSchema);
module.exports = GearList;
