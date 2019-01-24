<template>
  <div>
    <mu-container class="margin-top">
      <h1>Gear Lists</h1>
      <!-- Gear Lists Component -->
      <GearLists/>
      <!-- New Gear List Button -->
      <div class="margin-top-md margin-bottom-xl">
        <AddGearListButton/>
      </div>
      <!-- Gear Items -->
      <div class="margin-top">
        <h1>Gear Items</h1>
        <!-- Gear Items Component -->
        <GearItems/>
        <div class="margin-top-md margin-bottom">
          <!-- New Gear Item Button -->
          <AddGearItemButton/>
        </div>
      </div>
    </mu-container>
  </div>
</template>

<script>
import navItems from "@/components/navigation/dashboardNavItems.js";
import GearLists from "@/components/GearLists.vue";
import GearItems from "@/components/GearItems.vue";
import AddGearListButton from "@/components/AddGearListButton.vue";
import AddGearItemButton from "@/components/AddGearItemButton.vue";
export default {
  name: "Dashboard",
  components: {
    GearLists,
    GearItems,
    AddGearListButton,
    AddGearItemButton
  },
  data() {
    return {
      navItems
    };
  },
  created() {
    this.updatePrimaryNav(this.navItems);
  },
  methods: {
    updatePrimaryNav(navItems) {
      this.$emit("updateNavigation", navItems);
    }
  }
};
</script>

<style>
</style>
