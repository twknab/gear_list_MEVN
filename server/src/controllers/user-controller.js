const User = require("mongoose").model("User");

module.exports = {
  createUser: (req, res) => {
    console.log("🤞  Attemping to Create New User...");
    User.create(req.body)
      .then(newUser => {
        // set session
        console.log("👍  New User Successfully Created.");
        // Save User ID to session:
        req.session.userId = newUser._id;
        // Delete password salt from object before sending back:
        delete newUser.password;
        // Send back new User
        return res.status(201).json(newUser);
      })
      .catch(error => {
        console.log("😬  Error Creating New User:");
        console.log(error);
        return res.status(403).json(error.errors);
      });
  },
  loginUser: function(req, res) {
    console.log("🤞  Logging in Existing User...");
    console.log(req.body);
    User.findOne({ email: req.body.email })
      .then(foundUser => {
        // User was found
        console.log(`👍  User Successfully Found: ${foundUser.email}`);
        // Validate Password
        User.schema.methods.decryptPass(
          req.body.password,
          foundUser.password,
          function(success, error) {
            if (success) {
              // Password validated return user
              console.log("🤝  User credentials validated.");
              // Save User ID to session
              req.session.userId = foundUser._id;
              // Send back found User
              return res.status(200).json(foundUser);
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
    User.findOne({ _id: req.session.userId })
      .then(user => {
        return res.status(200).json(user);
      })
      .catch(error => {
        console.log(error);
        return res.status(403).json(error.errors);
      });
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
