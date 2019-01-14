<template>
  <div>
    <div class="form-background">
      <mu-container>
        <h1>Register</h1>
        <mu-form ref="form" :model="validateForm">
          <mu-form-item label="First Name" prop="firstName" color="primary" :rules="firstNameRules">
            <mu-text-field v-model="validateForm.firstName" prop="username" color="primary"></mu-text-field>
          </mu-form-item>
          <mu-form-item label="Last Name" prop="lastName" color="primary" :rules="lastNameRules">
            <mu-text-field v-model="validateForm.lastName" prop="username" color="primary"></mu-text-field>
          </mu-form-item>
          <mu-form-item label="Email" prop="email" color="primary" :rules="emailRules" type="email">
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
            <mu-button color="primary" @click="submit">register</mu-button>
          </mu-form-item>
        </mu-form>
      </mu-container>
    </div>
  </div>
</template>

<script>
export default {
  name: "Register",
  data() {
    return {
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
      validateForm: {
        firstName: "",
        lastName: "",
        email: "",
        password: ""
      }
    };
  }
};
</script>

<style>
</style>
