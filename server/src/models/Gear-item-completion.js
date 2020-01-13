const mongoose = require("mongoose"),
  Schema = mongoose.Schema;

// Setup a schema:
const GearItemCompletionSchema = new Schema(
  {
    gearItemId: {
      type: Schema.Types.ObjectId,
      ref: "gearItem",
      required: true
    },
    gearListId: {
      type: Schema.Types.ObjectId,
      ref: "gearList",
      required: true
    },
    completed: {
      type: Boolean,
      required: true,
      default: false
    }
  },
  {
    timestamps: true
  }
);

// // These functions run prior to document validation
// GearItemCompletionSchema.pre("validate", function(next) {
//   console.log("Do something before validation here..");
//   next();
// });

// // These functions run prior to document save()
// GearItemCompletionSchema.pre("save", function(next) {
//   console.log("Do something before save here...");
//   next();
// });

// Invoke our model using our schema and export
const GearItemCompletion = mongoose.model(
  "GearItemCompletion",
  GearItemCompletionSchema
);
module.exports = GearItemCompletion;
