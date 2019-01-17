const mongoose = require("mongoose"),
  bcrypt = require("bcrypt"),
  Schema = mongoose.Schema;

// Setup a schema:
const UserSchema = new Schema(
  {
    firstName: {
      type: String,
      minlength: [3, "First name must be 3-30 characters."],
      maxlength: [30, "First name must be 3-30 characters."],
      required: [true, "First Name is required."],
      trim: true
    },
    lastName: {
      type: String,
      minlength: [3, "Last name must be 3-30 characters."],
      maxlength: [30, "Last name must be 3-30 characters."],
      required: [true, "Last Name is required."],
      trim: true
    },
    email: {
      type: String,
      minlength: [5, "Email must be 5-50 characters."],
      maxlength: [50, "Email must be 5-50 characters."],
      required: [true, "Email is required."],
      trim: true,
      // index: true,
      lowercase: true,
      unique: [true, "Email address must be unique."],
      dropDups: true
    },
    password: {
      type: String,
      minlength: [12, "Password must be 12-24 characters."],
      maxlength: [24, "Password must be 12-24 characters."],
      required: [true, "Password is required."],
      trim: true
    },
    isAgree: {
      type: Boolean,
      required: [true, "TOS & Privacy Policy acceptance required."]
    },
    gearLists: [
      {
        // holds gear lists belonging to User
        type: Schema.Types.ObjectId,
        ref: "GearList"
      }
    ],
    welcomeMsgStatus: {
      // if true, welcome msg will display
      type: Boolean,
      default: true
    } // end welcome msg status
  },
  {
    timestamps: true
  }
);

UserSchema.pre("validate", next => {
  // Privacy policy and TOS required
  if (this.isAgree === false) {
    this.invalidate("isAgree", "TOS & Privacy Policy acceptance required.");
  }

  next();
});

const User = mongoose.model("User", UserSchema);
module.exports = User;
