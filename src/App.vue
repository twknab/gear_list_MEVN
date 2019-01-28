<template>
  <div id="app">
    <Navigation :navigationItems="nav"/>
    <router-view @updateNavigation="updateNav" @getGlobalUser="getGlobalUser" :user="loggedInUser"/>
  </div>
</template>

<script>
import Navigation from "@/components/Navigation.vue";
import UserService from "@/services/UserService.js";
export default {
  name: "App",
  components: {
    Navigation
  },
  data() {
    return {
      loggedInUser: {},
      open: false,
      nav: {}
    };
  },
  methods: {
    updateNav(navItems) {
      console.log("Updating navigation...");
      this.nav = navItems;
    },
    getGlobalUser() {
      console.log("Getting global logged in user...");
      UserService.getLoggedInUser()
        .then(response => {
          console.log(response.data);
          this.loggedInUser = response.data;
        })
        .catch(err => {
          console.log(err);
          this.$router.push({ name: "home" });
        });
    }
  }
};
</script>


<style>
</style>
