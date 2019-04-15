<template>
  <div>
    <div class="form-background">
      <mu-container>
        <!-- Registration Full Screen Dialogue -->
        <mu-container>
          <!-- <p
            class="text-center margin-top"
          >Use an account from another service, or create one below!</p>
          <div class="passport-icons">
            <mu-flex justify-content="center" align-items="center">
              <mu-button color="red" class="round-left">Google</mu-button>
              <mu-button color="blue">LinkedIn</mu-button>
              <mu-button color="indigo" class="round-right">Facebook</mu-button>
            </mu-flex>
          </div>-->
          <h1>Create a New Account</h1>
          <p>Register and create a new account with GearList below. Your information is not shared with anyone.</p>
          <!-- Registration Form -->
          <mu-form ref="newUserRegistration" :model="newUser" class="margin-top">
            <!-- Backend Errors Display -->
            <div v-if="Object.keys(errors).length >= 1" class="server-errors">
              <h2>Whoops, there's a few issues...</h2>
              <ul>
                <li v-for="(error, key, index) in errors" :key="index">{{ error.message }}</li>
              </ul>
            </div>
            <!-- First Name -->
            <mu-form-item
              label="First Name"
              prop="firstName"
              color="primary"
              :rules="firstNameRules"
            >
              <mu-text-field v-model="newUser.firstName" prop="firstName" color="primary"></mu-text-field>
            </mu-form-item>
            <!-- Last Name -->
            <mu-form-item label="Last Name" prop="lastName" color="primary" :rules="lastNameRules">
              <mu-text-field v-model="newUser.lastName" prop="lastName" color="primary"></mu-text-field>
            </mu-form-item>
            <!-- Email -->
            <mu-form-item
              label="Email"
              prop="email"
              color="primary"
              :rules="emailRules"
              type="email"
            >
              <mu-text-field v-model="newUser.email" prop="email" color="primary"></mu-text-field>
            </mu-form-item>
            <!-- Password -->
            <mu-form-item label="Password" prop="password" :rules="passwordRules">
              <mu-text-field
                type="password"
                v-model="newUser.password"
                prop="password"
                color="primary"
              ></mu-text-field>
            </mu-form-item>
            <!-- TOS Is Agree -->
            <mu-form-item prop="isAgree" :rules="agreeRules" class="TOS">
              <mu-checkbox label="Accept TOS & Privacy Policy" v-model="newUser.isAgree"></mu-checkbox>
            </mu-form-item>
            <!-- Submit Button / Cancel -->
            <mu-button round full-width color="purpleA700" @click="submit" large>
              <mu-icon value="check"></mu-icon>
              <span class="button-icon">Sign Up</span>
            </mu-button>
            <mu-button
              large
              flat
              color="purple50"
              @click="goHome"
              class="flat-full-width margin-top-md"
            >
              <mu-icon value="close"></mu-icon>
              <span class="button-icon">Nevermind</span>
            </mu-button>
          </mu-form>
        </mu-container>
      </mu-container>
    </div>
  </div>
</template>

<script>
import UserService from "@/services/UserService.js";
export default {
  name: "Register",
  data() {
    return {
      errors: {},
      firstNameRules: [
        { validate: val => !!val, message: "First name is required" },
        {
          validate: val => val.length >= 2 && val.length <= 30,
          message: "First name must be 2-30 characters"
        }
      ],
      lastNameRules: [
        { validate: val => !!val, message: "Last name is required" },
        {
          validate: val => val.length >= 2 && val.length <= 30,
          message: "Last name must be 2-30 characters"
        }
      ],
      emailRules: [
        { validate: val => !!val, message: "Email is required" },
        {
          validate: val => val.length >= 5 && val.length <= 50,
          message: "Email must be 5-50 characters"
        }
      ],
      passwordRules: [
        { validate: val => !!val, message: "Password is required" },
        {
          validate: val => val.length >= 12 && val.length <= 24,
          message: "Password must be 12-24 characters"
        }
      ],
      agreeRules: [
        {
          validate: val => !!val,
          message: "Acceptance of TOS & Privacy Policy required"
        }
      ],
      newUser: {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        isAgree: false
      }
    };
  },
  created() {},
  methods: {
    submit() {
      console.log("...submitting registration...");
      this.$refs.newUserRegistration.validate().then(result => {
        if (result) {
          // Register new user:
          UserService.registerNewUser(this.newUser)
            .then(response => {
              console.log(response.status);
              console.log(`👍`);
              // response.data contains your user object
              // send user upstream for dashboard component (or get when dashboard is loaded using session)

              // update navigation component

              // Redirect to dashboard view
              this.$router.push({ name: "dashboard" });
            })
            .catch(error => {
              this.errors = error.response.data;
            });
        }
      });
    },
    goHome() {
      this.$router.push({ name: "home" });
    }
  }
};
</script>

<style>
.mu-checkbox-label {
  color: rgba(255, 255, 255, 0.678) !important;
}

.mu-checkbox {
  color: rgba(255, 255, 255, 0.678) !important;
}
</style>
