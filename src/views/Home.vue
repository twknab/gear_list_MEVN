<template>
  <div class="home">
    <mu-container>
      <mu-row gutter>
        <mu-col span="12" sm="12" md="12" lg="12" xl="6">
          <div class="grid-cell">
            <!-- Welcome Component -->
            <Welcome msg="Pack Better for Your Trips!"/>
          </div>
        </mu-col>
        <mu-col span="12" sm="12" md="12" lg="12" xl="6">
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
import Welcome from "@/components/Welcome.vue";
import Login from "@/components/Login.vue";

export default {
  name: "home",
  components: {
    Welcome,
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
