<template>
  <div id="app">
    <Navigation/>
    <router-view/>
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
      open: false
    };
  },
  methods: {
    // updateNavigation() {
    //   console.log("Updating navigation...");
    // }
  }
};
</script>


<style>
</style>
