const mongoose = require("mongoose"),
  Schema = mongoose.Schema,
  FILE_BUG = "Kindly file a bug report.";

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
      ref: "User",
      require: true
    },
    gearItemsComplete: [
      {
        type: Schema.Types.ObjectId,
        ref: "GearItem"
      }
    ]
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

// GearListSchema.pre("validate", function(next) {
//   console.log("Do something before validation here..");
//   next();
// });

// GearListSchema.pre("save", function(next) {
//   console.log("Saving...");
//   next();
// });

GearListSchema.methods.attachToLists = function(
  itemId,
  savedListIds,
  selectedListIds,
  callback
) {
  const listsAddItem = [];
  const listsRemoveItem = [];

  // Find any lists that were removed during selection
  savedListIds.forEach(savedListId => {
    if (!selectedListIds.includes(savedListId)) {
      listsRemoveItem.push(savedListId);
    }
  });

  // Find any lists that were added during selection
  selectedListIds.forEach(selectedListId => {
    if (!savedListIds.includes(selectedListId)) {
      listsAddItem.push(selectedListId);
    }
  });

  // Remove item from any lists:
  if (listsRemoveItem.length > 0) {
    listsRemoveItem.forEach(listId => {
      GearList.findOneAndUpdate({ _id: listId }, { $pull: { items: itemId } })
        .then()
        .catch(err => {
          console.log("Error removing item from list...");
          console.log(err);
          callback({
            success: false,
            errors: [
              "Something went wrong removing item from list...",
              FILE_BUG
            ]
          });
        });
    });
  }

  // Add item to any lists:
  if (listsAddItem.length > 0) {
    listsAddItem.forEach(listId => {
      GearList.findOneAndUpdate(
        { _id: listId },
        { $addToSet: { items: itemId } }
      )
        .then()
        .catch(err => {
          console.log("Error adding item from list...");
          console.log(err);
          callback({
            success: false,
            errors: ["Something went wrong adding item to list...", FILE_BUG]
          });
        });
    });
  }

  callback({ success: true });
};

// Invoke our model using our schema and export
const GearList = mongoose.model("GearList", GearListSchema);
module.exports = GearList;
