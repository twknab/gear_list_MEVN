const mongoose = require("mongoose"),
  Schema = mongoose.Schema;

// Setup a schema:
const GearItemListAssociationSchema = new Schema(
  {
    gearItem: {
      type: Schema.Types.ObjectId,
      ref: "gearItem",
      required: true
    },
    gearList: {
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
// GearItemListAssociationSchema.pre("validate", function(next) {
//   console.log("Do something before validation here..");
//   next();
// });

// // These functions run prior to document save()
// GearItemListAssociationSchema.pre("save", function(next) {
//   console.log("Do something before save here...");
//   next();
// });

// Invoke our model using our schema and export
const GearItemListAssociation = mongoose.model(
  "GearItemListAssociation",
  GearItemListAssociationSchema
);
module.exports = GearItemListAssociation;
