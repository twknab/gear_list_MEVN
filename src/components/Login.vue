<template>
  <div>
    <div class="form-background">
      <mu-container>
        <h1>Login</h1>
        <mu-form ref="form" :model="validateForm">
          <mu-form-item label="Email" prop="email" type="email" color="primary" :rules="emailRules">
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
          <mu-form-item>
            <mu-button color="primary" @click="submit">login</mu-button>
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
      validateForm: {
        email: "",
        password: "",
        isAgree: false
      }
    };
  }
};
</script>

<style>
</style>
