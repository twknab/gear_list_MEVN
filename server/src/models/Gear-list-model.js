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
    }
  },
  {
    timestamps: true
  }
);

GearListSchema.methods.attachOneItemToManyLists = function(
  itemId,
  savedListIds,
  selectedListIds,
  callback
) {
  const listsToAddItemTo = [];
  const listsToRemoveItemFrom = [];

  // Find any lists that were removed during selection
  savedListIds.forEach(savedListId => {
    if (!selectedListIds.includes(savedListId)) {
      listsToRemoveItemFrom.push(savedListId);
    }
  });

  // Find any lists that were added during selection
  selectedListIds.forEach(selectedListId => {
    if (!savedListIds.includes(selectedListId)) {
      listsToAddItemTo.push(selectedListId);
    }
  });

  // Remove item from any lists:
  if (listsToRemoveItemFrom.length > 0) {
    listsToRemoveItemFrom.forEach(listId => {
      GearList.findOneAndUpdate({ _id: listId }, { $pull: { items: itemId } })
        .then(() => {
          GearItemCompletionData.findOneAndDelete({
            gearItem: itemId,
            gearList: listId
          })
            .then()
            .catch(err => {
              console.log("Error removing completion data for item...");
              console.log(err);
              callback({
                success: false,
                errors: [
                  "Something went wrong removing completion data for item...",
                  FILE_BUG
                ]
              });
            });
        })
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
  if (listsToAddItemTo.length > 0) {
    listsToAddItemTo.forEach(listId => {
      GearList.findOneAndUpdate(
        { _id: listId },
        { $addToSet: { items: itemId } }
      )
        .then()
        .catch(err => {
          console.log("Error adding item to list...");
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

GearListSchema.methods.attachManyItemsToOneList = function(
  listId,
  existingItemIds,
  selectedItemIds,
  callback
) {
  const itemsToAddToList = [];
  const itemsToRemoveFromList = [];

  // Find any items removed during selections
  existingItemIds.forEach(existingItemId => {
    if (!selectedItemIds.includes(existingItemId)) {
      itemsToRemoveFromList.push(existingItemId);
    }
  });

  // Find any items that were added during selection
  selectedItemIds.forEach(selectedItemId => {
    if (!existingItemIds.includes(selectedItemId)) {
      itemsToAddToList.push(selectedItemId);
    }
  });

  // Remove items from list:
  if (itemsToRemoveFromList.length > 0) {
    itemsToRemoveFromList.forEach(itemId => {
      GearList.findOneAndUpdate({ _id: listId }, { $pull: { items: itemId } })
        .then(() => {
          GearItemCompletionData.findOneAndDelete({
            gearItem: itemId,
            gearList: listId
          })
            .then()
            .catch(err => {
              console.log("Error removing completion data for item...");
              console.log(err);
              callback({
                success: false,
                errors: [
                  "Something went wrong removing completion data for item...",
                  FILE_BUG
                ]
              });
            });
        })
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

  // Add items to any list:
  if (itemsToAddToList.length > 0) {
    itemsToAddToList.forEach(itemId => {
      GearList.findOneAndUpdate(
        { _id: listId },
        { $addToSet: { items: itemId } }
      )
        .then()
        .catch(err => {
          console.log("Error adding item to list...");
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
const GearItemCompletionData = mongoose.model("GearItemCompletionData");
module.exports = GearList;
