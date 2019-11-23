const mongoose = require("mongoose"),
  Schema = mongoose.Schema;

// Setup a schema:
const GearItemCompleteSchema = new Schema(
  {
    item: {
      type: Schema.Types.ObjectId,
      ref: "GearItem"
    },
    gearList: {
      type: Schema.Types.ObjectId,
      ref: "GearList"
    },
    itemCompleteOwner: {
      type: Schema.Types.ObjectId,
      ref: "User",
      require: true
    },
    isComplete: {
      type: Boolean,
      default: false
    }
  },
  {
    timestamps: true
  }
);

//////////////////////////
//
//  UNCOMMENT FOR PRE VALIDATE & SAVE METHODS
//
//////////////////////////

// GearItemCompleteSchema.pre("validate", function(next) {
//   console.log("Do something before validation here..");
//   next();
// });

// GearItemCompleteSchema.pre("save", function(next) {
//   console.log("Saving...");
//   next();
// });

// Invoke our model using our schema and export
const GearItemComplete = mongoose.model(
  "GearItemComplete",
  GearItemCompleteSchema
);
module.exports = GearItemComplete;
