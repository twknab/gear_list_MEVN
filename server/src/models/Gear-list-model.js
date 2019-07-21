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

GearListSchema.methods.validateAddItems = function(listIds, itemId, callback) {
  let listsHaveItems = [];
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
        lists.forEach(list => {
          let foundMatchingItem = false;
          // console.log("DIS LIST", list);
          list.items.forEach(item => {
            console.log("asessing item...");
            // console.log(item);
            if (item._id == itemId) {
              console.log("Dup found");
              foundMatchingItem = true;
              listsHaveItems.push(
                `${item.title} is already added to: ${list.title}`
              );
            }
          });
          if (!foundMatchingItem) {
            GearList.findByIdAndUpdate(
              { _id: list._id },
              { $addToSet: { items: itemId } }
            )
              .then(list => {
                console.log(list);
              })
              .catch(err => {
                console.log(err);
              });
            resolve({ success: true });
          }
          reject({ success: false, errors: listsHaveItems });
        });
      })
      .catch(err => {
        reject({ success: false, errors: err });
      });
  });

  validateAndAddToLists
    .then(function(message) {
      console.log("1. THIS IS THE RETURN FROM PROMISE", message);
      callback(message);
      // return message;
    })
    .catch(function(err) {
      console.log("1. `THIS IS THE ERR FROM PROMISE", err);
      callback(err);
    });
};

// Invoke our model using our schema and export
const GearList = mongoose.model("GearList", GearListSchema);
module.exports = GearList;
