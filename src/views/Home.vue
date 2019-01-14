<template>
  <div class="home">
    <mu-container>
      <mu-row gutter>
        <mu-col span="12" sm="12" md="6" lg="6" xl="6">
          <div class="grid-cell">
            <!-- Welcome Image -->
            <img
              alt="Welcome to GearList"
              src="https://loremflickr.com/250/250/nature"
              class="welcome-image"
            >
            <!-- Welcome Component -->
            <Welcome msg="Welcome to Your Vue.js App"/>
          </div>
        </mu-col>
        <mu-col span="12" sm="12" md="6" lg="6" xl="6">
          <div class="grid-cell">
            <!-- Login Component -->
            <Login/>
            <!-- Registration / Sign-Up Button -->
            <mu-container>
              <mu-flex>
                <span class="button-icon">
                  <mu-button round color="secondary" @click="goToRegister" large>
                    <mu-icon value="thumb_up"></mu-icon>
                    <span class="button-icon">Or sign up!</span>
                  </mu-button>
                </span>
              </mu-flex>
            </mu-container>
          </div>
        </mu-col>
      </mu-row>
    </mu-container>
  </div>
</template>

<script>
// @ is an alias to /src
import Welcome from "@/components/Welcome.vue";
// import Register from "@/views/Register.vue";
import Login from "@/components/Login.vue";

export default {
  name: "home",
  components: {
    Welcome,
    // Register,
    Login
  },
  methods: {
    goToRegister() {
      console.log("running");
      this.$router.push({ name: "register" });
    }
  }
};
</script>
