<template>
  <div>
    <mu-container class="margin-top margin-bottom">
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
        <mu-dialog
          width="600"
          max-width="80%"
          class="notification-dialogue"
          :esc-press-close="true"
          :overlay-close="true"
          :open.sync="showSuccessAlert"
          :overlay="true"
          :overlay-opacity=".8"
        >
          <mu-alert
            color="success"
            @delete="showSuccessAlert = false"
            delete
            v-if="showSuccessAlert"
            transition="mu-scale-transition"
            class="success-alert"
          >
            <mu-icon left size="32" value="check_circle"></mu-icon>
            {{ successMessage }}
          </mu-alert>
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
.notification-dialogue > div {
  background: transparent !important;
  box-shadow: none !important;
  -webkit-box-shadow: none !important;
}
.success-alert {
  border: 10px solid #59cd59 !important;
  font-weight: bolder;
  color: white !important;
}
.mu-alert-delete-icon {
  height: 22px !important;
  width: 22px !important;
}
</style>
