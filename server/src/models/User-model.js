const mongoose = require("mongoose"),
  bcrypt = require("bcrypt"),
  saltRounds = 12,
  Schema = mongoose.Schema,
  uniqueValidator = require("mongoose-unique-validator");

// Setup a schema:
const UserSchema = new Schema(
  {
    firstName: {
      type: String,
      minlength: [2, "First name must be 2-30 characters."],
      maxlength: [30, "First name must be 2-30 characters."],
      required: [true, "First Name is required."],
      trim: true
    },
    lastName: {
      type: String,
      minlength: [2, "Last name must be 2-30 characters."],
      maxlength: [30, "Last name must be 2-30 characters."],
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
        // holds gear lists User owns
        type: Schema.Types.ObjectId,
        ref: "GearList"
      }
    ],
    gearItems: [
      {
        // holds gear items User owns
        type: Schema.Types.ObjectId,
        ref: "GearItem"
      }
    ],
    // sharedLists: [
    //   {
    //     // holds lists shared by friends
    //     type: Schema.Types.ObjectId,
    //     ref: "SharedList"
    //   }
    // ],
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

// These functions run prior to document validation
UserSchema.pre("validate", function(next) {
  // Privacy policy and TOS required
  if (this.isAgree === false) {
    this.invalidate("isAgree", "TOS & Privacy Policy acceptance required.");
  }

  next();
});

// These functions run prior to document save()
UserSchema.pre("save", function(next) {
  // Hash password with bcrypt
  UserSchema.methods.encryptPass(this.password, (hashed, error) => {
    if (hashed) {
      this.password = hashed;
      next();
    } else if (error) {
      next(error);
    }
  });
});

// Encrypt a password given a user password, and callback function
UserSchema.methods.encryptPass = function(userPassword, callback) {
  bcrypt
    .hash(userPassword, saltRounds)
    .then(function(hash) {
      callback(hash);
    })
    .catch(function(error) {
      error.errors = {
        invalid: { message: "Something's wrong here, contact the admin." }
      };
      callback(false, error);
    });
};

// Decrypt a password given a user password, hash and a callback function
UserSchema.methods.decryptPass = function(userPassword, hash, callback) {
  bcrypt
    .compare(userPassword, hash)
    .then(function(res) {
      if (res) {
        callback(res, false);
      } else {
        let error = { errors: {} };
        error.success = res;
        error.errors = {
          invalid: {
            message: "Invalid email or password."
          }
        };
        callback(false, error);
      }
    })
    .catch(function(err) {
      err = { success: err };
      err.errors = {
        invalid: { message: "Something's wrong here, contact the admin." }
      };
      callback(false, err);
    });
};

UserSchema.methods.hidePasswordSalt = function() {
  let self = this;
  self = self.toObject();
  if (self.password) {
    delete self.password;
  }
  return self;
};

// Invoke the mongoose unique validator
UserSchema.plugin(uniqueValidator, {
  message: "Email address must be unique."
});

// Invoke our model using our schema and export
const User = mongoose.model("User", UserSchema);
module.exports = User;
