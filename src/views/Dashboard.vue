<template>
  <div>
    <mu-container class="margin-top margin-bottom">
      <pre style="color: white;">{{user}}</pre>
      <mu-flex justify-content="end">
        <p>
          {{timeGreeting}}, {{ user.firstName }}.
          <mu-button small flat color="primary" @click="$router.push({name: 'logout'})">Logout</mu-button>
        </p>
      </mu-flex>
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
  computed: {
    timeGreeting: function() {
      const currentHour = new Date().getHours();
      let greeting = "";
      if (0 >= currentHour && currentHour <= 11) {
        greeting = "Good morning";
      } else if (12 >= currentHour && currentHour <= 4) {
        greeting = "Good afternoon";
      } else {
        greeting = "Good evening";
      }
      return greeting;
    }
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
