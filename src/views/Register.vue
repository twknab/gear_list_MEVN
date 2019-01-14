<template>
  <div>
    <div class="form-background">
      <mu-container>
        <!-- Registration Full Screen Dialogue -->
        <mu-container>
          <h1>Sign Up</h1>
          <!-- <p>Create an account below to start using GearList!</p> -->
          <p class="text-center">Sign up with an account from another service</p>
          <mu-flex justify-content="center" align-items="center">
            <mu-button large color="red">Google</mu-button>
            <mu-button large color="blue">LinkedIn</mu-button>
            <mu-button large color="indigo">Facebook</mu-button>
          </mu-flex>
          <h2 class="text-center">Or create an account below!</h2>
          <!-- Registration Form -->
          <mu-form ref="form" :model="validateForm">
            <mu-form-item
              label="First Name"
              prop="firstName"
              color="primary"
              :rules="firstNameRules"
            >
              <mu-text-field v-model="validateForm.firstName" prop="username" color="primary"></mu-text-field>
            </mu-form-item>
            <mu-form-item label="Last Name" prop="lastName" color="primary" :rules="lastNameRules">
              <mu-text-field v-model="validateForm.lastName" prop="username" color="primary"></mu-text-field>
            </mu-form-item>
            <mu-form-item
              label="Email"
              prop="email"
              color="primary"
              :rules="emailRules"
              type="email"
            >
              <mu-text-field v-model="validateForm.email" prop="username" color="primary"></mu-text-field>
            </mu-form-item>
            <mu-form-item label="Password" prop="password" :rules="passwordRules">
              <mu-text-field
                type="password"
                v-model="validateForm.password"
                prop="password"
                color="primary"
              ></mu-text-field>
            </mu-form-item>
            <mu-form-item prop="isAgree" :rules="argeeRules">
              <mu-checkbox label="Accept TOS & Privacy Policy" v-model="validateForm.isAgree"></mu-checkbox>
            </mu-form-item>
            <mu-form-item>
              <mu-button round color="secondary" @click="submit" large>
                <mu-icon value="check"></mu-icon>
                <span class="button-icon">Sign Up</span>
              </mu-button>
            </mu-form-item>
            <mu-button round flat color="primary" @click="goHome">
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
export default {
  name: "Register",
  data() {
    return {
      openFullscreen: false,
      firstNameRules: [
        { validate: val => !!val, message: "First name must be filled in" },
        {
          validate: val => val.length >= 3,
          message: "First name length greater than 3"
        }
      ],
      lastNameRules: [
        { validate: val => !!val, message: "Last name must be filled in" },
        {
          validate: val => val.length >= 3,
          message: "Last name length greater than 3"
        }
      ],
      emailRules: [
        { validate: val => !!val, message: "Email must be filled in" },
        {
          validate: val => val.length >= 5,
          message: "Email length greater than 5"
        }
      ],
      passwordRules: [
        { validate: val => !!val, message: "Password must be filled in" },
        {
          validate: val => val.length >= 3 && val.length <= 10,
          message: "Password length must be greater than 3 and less than 10"
        }
      ],
      argeeRules: [
        { validate: val => !!val, message: "Must agree with user agreement" }
      ],
      validateForm: {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        isAgree: false
      }
    };
  },
  methods: {
    submit() {
      console.log("...submitting registration...");
    },
    goHome() {
      this.$router.push({ name: "home" });
    }
  }
};
</script>

<style>
</style>
