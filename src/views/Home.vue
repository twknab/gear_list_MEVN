<template>
  <div class="home">
    <mu-container>
      <mu-row gutter>
        <mu-col span="12" sm="12" md="12" lg="12" xl="6" class="margin-top-xl">
          <div class="grid-cell">
            <!-- Welcome Component -->
            <WelcomeImage/>
          </div>
        </mu-col>
        <mu-col span="12" sm="12" md="12" lg="12" xl="6" class="margin-top">
          <div class="grid-cell">
            <!-- Login Component -->
            <Login @updateGlobalUser="updateGlobalUser"/>
            <!-- Registration / Sign-Up Button lives in Login Component -->
          </div>
        </mu-col>
      </mu-row>
    </mu-container>
  </div>
</template>

<script>
// @ is an alias to /src
import WelcomeImage from "@/components/WelcomeImage.vue";
import Login from "@/components/Login.vue";

export default {
  name: "home",
  components: {
    WelcomeImage,
    Login
  },
  created() {
    this.$emit("updateNavigation");
  },
  methods: {
    updateGlobalUser(user) {
      console.log("updating global user...");
      this.$emit("updateUser", user);
    }
  }
};
</script>
