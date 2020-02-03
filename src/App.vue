<template>
  <div id="app">
    <Navigation :navigationItems="nav" />
    <router-view
      @updateNavigation="updateNav"
      @getGloballyLoggedInUser="getGloballyLoggedInUser"
      :user="loggedInUser"
    />
  </div>
</template>

<script>
import Navigation from "@/components/Navigation.vue";
import dashboardNavigation from "@/components/navigation/dashboardNavItems";
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
      if (!navItems) {
        this.nav = dashboardNavigation;
      }
      this.nav = navItems;
    },
    getGloballyLoggedInUser() {
      UserService.getLoggedInUser()
        .then(response => {
          this.loggedInUser = response.data;
        })
        .catch(() => {
          this.$router.push({ name: "home" });
        });
    }
  }
};
</script>

<style></style>
