<template>
  <div>
    <div class="form-background">
      <mu-container>
        <!-- Registration Full Screen Dialogue -->
        <mu-container>
          <p
            class="text-center margin-top"
          >Sign up with an account from another service, or create one below!</p>
          <div class="passport-icons">
            <mu-flex justify-content="center" align-items="center">
              <mu-button color="red" class="round-left">Google</mu-button>
              <mu-button color="blue">LinkedIn</mu-button>
              <mu-button color="indigo" class="round-right">Facebook</mu-button>
            </mu-flex>
          </div>
          <!-- Registration Form -->
          <mu-form ref="newUserRegistration" :model="newUser">
            <mu-form-item
              label="First Name"
              prop="firstName"
              color="primary"
              :rules="firstNameRules"
            >
              <mu-text-field v-model="newUser.firstName" prop="firstName" color="primary"></mu-text-field>
            </mu-form-item>
            <mu-form-item label="Last Name" prop="lastName" color="primary" :rules="lastNameRules">
              <mu-text-field v-model="newUser.lastName" prop="lastName" color="primary"></mu-text-field>
            </mu-form-item>
            <mu-form-item
              label="Email"
              prop="email"
              color="primary"
              :rules="emailRules"
              type="email"
            >
              <mu-text-field v-model="newUser.email" prop="email" color="primary"></mu-text-field>
            </mu-form-item>
            <mu-form-item label="Password" prop="password" :rules="passwordRules">
              <mu-text-field
                type="password"
                v-model="newUser.password"
                prop="password"
                color="primary"
              ></mu-text-field>
            </mu-form-item>
            <mu-form-item prop="isAgree" :rules="agreeRules" class="TOS">
              <mu-checkbox label="Accept TOS & Privacy Policy" v-model="newUser.isAgree"></mu-checkbox>
            </mu-form-item>
            <mu-form-item>
              <mu-button round color="purpleA700" @click="submit" large>
                <mu-icon value="check"></mu-icon>
                <span class="button-icon">Sign Up</span>
              </mu-button>
              <mu-button large flat color="purple50" @click="goHome">
                <mu-icon value="close"></mu-icon>
                <span class="button-icon">Nevermind</span>
              </mu-button>
            </mu-form-item>
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
      openFullscreen: false,
      firstNameRules: [
        { validate: val => !!val, message: "First name is required" },
        {
          validate: val => val.length >= 3 && val.length <= 30,
          message: "First name must be 3-30 characters"
        }
      ],
      lastNameRules: [
        { validate: val => !!val, message: "Last name is required" },
        {
          validate: val => val.length >= 3 && val.length <= 30,
          message: "Last name must be 3-30 characters"
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
  created() {
    console.log(this.newUser.isAgree);
  },
  methods: {
    submit() {
      console.log("...submitting registration...");
      this.$refs.newUserRegistration.validate().then(result => {
        if (result) {
          console.log(this.newUser);
          console.log("Form validated: ", result);
          // Register new user:
          UserService.registerNewUser(this.newUser)
            .then(response => {
              console.log(`👍  ${response.data}`);
            })
            .catch(error => {
              console.log(`❌  ${error.response}`);
            });
        } else {
          console.log("Form did not validate");
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
</style>
