<template>
  <div>
    <mu-container>
      <mu-row gutter>
        <mu-col span="12">
          <h1>Login</h1>
        </mu-col>
      </mu-row>
      <mu-row span="12">
        <!-- Login Form -->
        <mu-form
          ref="existingUserLogin"
          :model="existingUser"
          class="margin-bottom-xl"
        >
          <!-- Backend Errors Display -->
          <div v-if="Object.keys(errors).length >= 1" class="server-errors">
            <h2>Whoops, there's a few issues...</h2>
            <ul>
              <li v-for="(error, key, index) in errors" :key="index">
                {{ error.message }}
              </li>
            </ul>
          </div>
          <!-- Email -->
          <mu-form-item
            label="Email"
            prop="email"
            type="email"
            :rules="emailRules"
          >
            <mu-text-field
              v-model="existingUser.email"
              prop="email"
              color="primary"
            ></mu-text-field>
          </mu-form-item>
          <!-- Password -->
          <mu-form-item label="Password" prop="password" :rules="passwordRules">
            <mu-text-field
              type="password"
              v-model="existingUser.password"
              prop="password"
              color="primary"
            ></mu-text-field>
          </mu-form-item>
          <!-- Submit Button -->
          <mu-button full-width round color="purpleA400" @click="submit" large>
            <mu-icon value="exit_to_app"></mu-icon>
            <span class="button-icon">login</span>
          </mu-button>
          <div class="margin-top-md">
            <mu-button
              class="flat-full-width"
              flat
              color="white"
              @click="goToRegister"
              large
            >
              <mu-icon value="thumb_up"></mu-icon>
              <span class="button-icon">Or sign up!</span>
            </mu-button>
          </div>
        </mu-form>
      </mu-row>
    </mu-container>
  </div>
</template>

<script>
import UserService from "@/services/UserService.js";
export default {
  name: "Login",
  data() {
    return {
      errors: {},
      // these are front-end validations:
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
      existingUser: {
        email: "",
        password: ""
      }
    };
  },
  methods: {
    submit() {
      this.$refs.existingUserLogin.validate().then(result => {
        if (result) {
          // Attempt to login existing user:
          UserService.loginExistingUser(this.existingUser)
            .then(() => {
              // Redirect to dashboard view
              this.$router.push({ name: "dashboard" });
            })
            .catch(error => {
              this.errors = error.response.data;
            });
        }
      });
    },
    goToRegister() {
      this.$router.push({ name: "register" });
    }
  }
};
</script>

<style></style>
