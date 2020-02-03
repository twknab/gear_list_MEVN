const User = require("mongoose").model("User");

module.exports = {
  createUser: (req, res) => {
    User.create(req.body)
      .then(newUser => {
        // Save User ID to session:
        req.session.userId = newUser._id;
        // Send back success
        // Note: No need to send back the user here since when we login to the dashboard we'll retrieve them
        return res.status(201).json({ success: "success" });
      })
      .catch(error => {
        console.log("😬  Error Creating New User:");
        console.log(error);
        return res.status(403).json(error.errors);
      });
  },
  loginUser: function(req, res) {
    User.findOne({ email: req.body.email })
      .then(foundUser => {
        // Validate Password
        User.schema.methods.decryptPass(
          req.body.password,
          foundUser.password,
          function(success, error) {
            // Developer note: Some of the work here could be moved into the Model to better follow skinny controller/fat model design patterns
            if (success) {
              // Save User ID to session
              req.session.userId = foundUser._id;
              // Send back success
              return res.status(200).json({ success: "success." });
            } else {
              // Password failed and send error
              console.log("❌  Error validating user.");
              console.log(error);
              return res.status(401).json(error.errors);
            }
          }
        );
      })
      .catch(error => {
        // User was not found
        console.log("😬  Error Finding User:");
        console.log(error);
        error = {
          errors: {}
        };
        error.errors.invalid = {
          message: "Invalid email or password."
        };
        console.log(error);
        return res.status(401).json(error.errors);
      });
  },
  getLoggedInById: (req, res) => {
    console.log("here is session id");
    console.log(req.session.userId);
    if (req.session.userId === undefined) {
      return res
        .status(403)
        .json({ notAuthenticated: "You must be authenticated." });
    } else {
      User.findOne({ _id: req.session.userId })
        .then(user => {
          console.log("HERE IS WHAT WE FOUND");
          console.log(user);
          user = user.hidePasswordSalt();
          console.log("This is the user");
          console.log(user);

          return res.status(200).json(user);
        })
        .catch(error => {
          console.log(error);
          return res.status(403).json(error.errors);
        });
    }
  },
  logout: (req, res) => {
    req.session.destroy(function(err) {
      if (err) {
        console.log(err);
        return res.status(403).json(err);
      } else {
        return res.status(200).json({ success: "User has been logged out." });
      }
    });
  }
};
