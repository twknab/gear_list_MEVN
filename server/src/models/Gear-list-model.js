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
// GearListSchema.pre("validate", function(next) {
//   console.log("Do something before validation here..");
//   next();
// });

// These functions run prior to document save()
GearListSchema.pre("save", function(next) {
  console.log("Saving...");
  next();
});

GearListSchema.methods.addToGearLists = function(listIds, itemId, callback) {
  const self = this;
  let validateAndAddToLists = new Promise(function(resolve, reject) {
    // converts the list IDs (strings) to Mongoose "ObjectIDs" (objects)
    const mongooseObjectIds = listIds.map(id => {
      return mongoose.Types.ObjectId(`${id}`);
    });
    GearList.find({
      _id: {
        $in: mongooseObjectIds
      }
    })
      .populate({
        path: "items"
      })
      .exec()
      .then(lists => {
        self.addItemsValidation(lists, itemId, reject, resolve);
      })
      .catch(err => {
        console.error("Something went wrong with retrieving gear lists.");
        console.log("Here's the error", err);
        reject({
          success: false,
          errors:
            "Something went wrong trying to grab gear lists - contact admin."
        });
      });
  });

  validateAndAddToLists
    .then(function(successData) {
      console.log("1. Success data returned from promise: ", successData);
      callback(successData);
    })
    .catch(function(failureData) {
      console.log("1. Failure data returned from promise", failureData);
      callback(failureData);
    });
};

/*
/ Validates item being added to lists to ensure no duplicates.
Returns successesful list adds, as well as duplicates detected.
*/
GearListSchema.methods.addItemsValidation = function(
  lists,
  itemId,
  reject,
  resolve
) {
  let listsItemAddedFailures = [];
  let listsItemAddedSuccesses = [];
  lists.forEach(list => {
    let foundMatchingItem = false;
    list.items.forEach(item => {
      console.log("asessing item...");
      if (item._id == itemId) {
        console.log("Dup found");
        foundMatchingItem = true;
        listsItemAddedFailures.push(list.title);
      }
    });
    if (!foundMatchingItem) {
      GearList.findByIdAndUpdate(
        { _id: list._id },
        { $addToSet: { items: itemId } }
      )
        .then(list => {
          listsItemAddedSuccesses.push(list.title);
          console.log(
            "Successfully added item to list..here's it now: ",
            listsItemAddedSuccesses
          );
        })
        .catch(err => {
          console.log(err);
          reject({
            success: false,
            errors: ["Something went wrong adding to list - contact admin."]
          });
        });
    }
  });
  if (listsItemAddedFailures.length < 1) {
    resolve({
      success: true,
      listSuccesses: listsItemAddedSuccesses
    });
  } else {
    reject({
      success: false,
      listSuccesses: listsItemAddedSuccesses,
      errors: listsItemAddedFailures
    });
  }
};

// Invoke our model using our schema and export
const GearList = mongoose.model("GearList", GearListSchema);
module.exports = GearList;
