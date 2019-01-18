const mongoose = require("mongoose"),
  bcrypt = require("bcrypt"),
  saltRounds = 10,
  Schema = mongoose.Schema,
  uniqueValidator = require("mongoose-unique-validator");

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
      unique: true,
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

UserSchema.pre("validate", function(next) {
  // Privacy policy and TOS required
  if (this.isAgree === false) {
    this.invalidate("isAgree", "TOS & Privacy Policy acceptance required.");
  }

  next();
});

UserSchema.pre("save", function(next) {
  // Hash password with bcrypt
  UserSchema.methods.encryptPass(this.password, hashed => {
    this.password = hashed;
    next();
  });
});

UserSchema.methods.encryptPass = function(userPassword, callback) {
  bcrypt.hash(userPassword, saltRounds).then(function(hash) {
    callback(hash);
  });
};

UserSchema.methods.decryptPass = function(userPassword, hash, callback) {
  bcrypt.compare(userPassword, hash).then(function(res) {
    callback(res);
  });
};

UserSchema.plugin(uniqueValidator, {
  message: "Email address must be unique."
});

const User = mongoose.model("User", UserSchema);
module.exports = User;
