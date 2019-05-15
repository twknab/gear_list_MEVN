<template>
  <div>
    <mu-container class="margin-top margin-bottom">
      <!-- <pre style="color: white;">{{user}}</pre> -->
      <mu-flex justify-content="end">
        <p>
          {{ timeGreeting }}, {{ user.firstName }}.
          <mu-button
            small
            flat
            color="primary"
            @click="$router.push({name: 'logout'})"
            class="margin-left-sm"
          >Logout</mu-button>
        </p>
      </mu-flex>
      <h1>Gear Lists</h1>
      <!-- Gear Lists Component -->
      <GearLists @updateAllGearLists="updateGearListsForUser"/>
      <!-- Gear Items -->
      <div class="margin-top-xl">
        <h1>Gear Items</h1>
        <!-- TODO: CLEAN UP ERROR PRESENTATION - JUST NOTIFICATION POP-UP? -->
        <mu-dialog
          width="600"
          max-width="80%"
          :esc-press-close="true"
          :overlay-close="false"
          :open.sync="showSuccessAlert"
        >
          <mu-alert
            color="success"
            @delete="showSuccessAlert = false"
            delete
            v-if="showSuccessAlert"
            transition="mu-scale-transition"
          >
            <mu-icon left value="check_circle"></mu-icon>
            {{ successMessage }}
          </mu-alert>
          <mu-button
            slot="actions"
            flat
            color="primary"
            @click="showSuccessAlert = false"
          >Sounds Good!</mu-button>
        </mu-dialog>
        <!-- Gear Items Component -->
        <GearItems :gearLists="gearLists" @updateDashboardSuccessMessage="updateSuccessMessage"/>
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
      navItems,
      gearLists: [],
      showSuccessAlert: false,
      successMessage: ""
    };
  },
  computed: {
    timeGreeting: function() {
      const currentHour = new Date().getHours();
      let greeting = "";
      if (0 <= currentHour && currentHour <= 11) {
        greeting = "Good morning";
      } else if (12 >= currentHour && currentHour <= 16) {
        greeting = "Good afternoon";
      } else {
        greeting = "Good evening";
      }
      return greeting;
    }
  },
  created() {
    this.updatePrimaryNav(this.navItems);
    this.getLoggedInUser();
  },
  methods: {
    updatePrimaryNav(navItems) {
      this.$emit("updateNavigation", navItems);
    },
    getLoggedInUser() {
      this.$emit("getGlobalUser");
    },
    updateGearListsForUser(gearLists) {
      this.gearLists = Object.values(gearLists);
    },
    updateSuccessMessage(message) {
      this.successMessage = message;
      this.showSuccessAlert = true;
    }
  }
};
</script>

<style>
</style>
