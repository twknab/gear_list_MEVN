<template>
  <div>
    <div class="form-background">
      <mu-container>
        <h1>Login</h1>
        <mu-form ref="form" :model="validateForm">
          <mu-form-item label="Email" prop="email" type="email" :rules="emailRules">
            <mu-text-field v-model="validateForm.email" prop="email" color="primary"></mu-text-field>
          </mu-form-item>
          <mu-form-item label="Password" prop="password" :rules="passwordRules">
            <mu-text-field
              type="password"
              v-model="validateForm.password"
              prop="password"
              color="primary"
            ></mu-text-field>
          </mu-form-item>
          <mu-form-item>
            <mu-button round color="purpleA400" @click="submit" large>
              <mu-icon value="exit_to_app"></mu-icon>
              <span class="button-icon">login</span>
            </mu-button>
            <mu-button round color="secondary" @click="goToRegister" large>
              <mu-icon value="thumb_up"></mu-icon>
              <span class="button-icon">Or sign up!</span>
            </mu-button>
          </mu-form-item>
        </mu-form>
      </mu-container>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      emailRules: [
        { validate: val => !!val, message: "Email is required" },
        {
          validate: val => val.length >= 5,
          message: "Email must be 5+ characters"
        }
      ],
      passwordRules: [
        { validate: val => !!val, message: "Password is required" },
        {
          validate: val => val.length >= 3 && val.length <= 10,
          message: "Password must be 4-9 characters"
        }
      ],
      validateForm: {
        email: "",
        password: "",
        isAgree: false
      }
    };
  },
  methods: {
    submit() {
      console.log("Submitting login!");
    },
    goToRegister() {
      this.$router.push({ name: "register" });
    }
  }
};
</script>

<style>
</style>
