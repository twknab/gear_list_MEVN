<template>
  <div>
    <mu-container class="margin-top margin-bottom">
      <pre style="color: white;">{{user}}</pre>
      <h1>Gear Lists</h1>
      <!-- Gear Lists Component -->
      <GearLists/>
      <!-- Gear Items -->
      <div class="margin-top">
        <h1>Gear Items</h1>
        <!-- Gear Items Component -->
        <GearItems/>
      </div>
    </mu-container>
  </div>
</template>

<script>
import navItems from "@/components/navigation/dashboardNavItems.js";
import GearLists from "@/components/GearLists.vue";
import GearItems from "@/components/GearItems.vue";
export default {
  name: "Dashboard",
  props: {
    user: {
      type: Object,
      required: true
    }
  },
  components: {
    GearLists,
    GearItems
  },
  data() {
    return {
      navItems
    };
  },
  beforeMount() {
    this.updatePrimaryNav(this.navItems);
    this.getLoggedInUser();
  },
  methods: {
    updatePrimaryNav(navItems) {
      this.$emit("updateNavigation", navItems);
    },
    getLoggedInUser() {
      this.$emit("getGlobalUser");
    }
  }
};
</script>

<style>
</style>
