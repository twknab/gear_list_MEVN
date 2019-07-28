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
            @click="$router.push({ name: 'logout' })"
            class="margin-left-sm"
            >Logout</mu-button
          >
        </p>
      </mu-flex>
      <h1>Gear Lists</h1>
      <!-- Gear Lists Component -->
      <GearLists @updateAllGearLists="updateGearListsForUser" />
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
          :overlay-opacity="0.8"
        >
          <mu-alert
            color="success"
            @delete="showSuccessAlert = false"
            delete
            v-if="showSuccessAlert"
            transition="mu-scale-transition"
            class="custom-alert success-alert"
          >
            <mu-icon left size="32" value="check_circle"></mu-icon>
            {{ successMessage }}
          </mu-alert>
        </mu-dialog>
        <mu-dialog
          width="600"
          max-width="80%"
          class="notification-dialogue"
          :esc-press-close="true"
          :overlay-close="true"
          :open.sync="showFailureAlert"
          :overlay="true"
          :overlay-opacity="0.8"
        >
          <mu-alert
            color="rgb(255, 200, 58)"
            v-if="showFailureAlert"
            transition="mu-scale-transition"
            class="custom-alert failure-alert"
          >
            <mu-icon left size="32" value="warning"></mu-icon>Whoops, something
            went wrong:
            <mu-list dense="true">
              <mu-list-item
                :button="false"
                :ripple="false"
                v-for="(errorMessage, key, index) in failureMessages"
                v-bind:key="index"
                class="failure-alert-text"
              >
                <mu-list-item-action class="failure-alert-text">
                  <mu-icon value="error_outline"></mu-icon>
                </mu-list-item-action>
                <mu-list-item-title class="failure-alert-text-title">
                  <em>{{ errorMessage }}</em>
                </mu-list-item-title>
              </mu-list-item>
            </mu-list>
            <div class="dismiss-button">
              <mu-button
                color="rgba(79, 78, 78, 0.55)"
                @click="showFailureAlert = false"
                >OK, got it</mu-button
              >
            </div>
          </mu-alert>
        </mu-dialog>
        <!-- Gear Items Component -->
        <GearItems
          :gearLists="gearLists"
          @updateDashboardSuccessMessage="updateSuccessMessage"
          @updateDashboardFailureMessage="updateFailureMessages"
        />
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
      showFailureAlert: false,
      successMessage: "",
      failureMessages: []
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
    },
    updateFailureMessages(messages) {
      this.failureMessages = messages;
      this.showFailureAlert = true;
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
.custom-alert {
  font-weight: bolder;
  flex-flow: wrap;
}
.success-alert {
  border: 10px solid #59cd59 !important;
  color: white !important;
}
.failure-alert {
  border: 10px solid #ffa000 !important;
  color: #bb8b00 !important;
}
.failure-alert-text {
  color: #bb8b00 !important;
}
.failure-alert-text-title {
  color: #bb8b00 !important;
}
.failure-check-mark {
  margin-right: 10px;
}
.mu-alert-delete-icon {
  height: 22px !important;
  width: 22px !important;
}
.mu-warning-color {
  background-color: rgb(255, 218, 122);
}
.dismiss-button {
  margin: 15px 15px 0px auto;
}
</style>
