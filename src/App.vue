<template>
  <div id="app">
    <Navigation :navigationItems="nav"/>
    <router-view @updateNavigation="updateNav"/>
  </div>
</template>

<script>
import Navigation from "@/components/Navigation.vue";
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
    }
  }
};
</script>


<style>
</style>
