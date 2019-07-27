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
            class="custom-alert success-alert alert-text"
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
            class="custom-alert failure-alert alert-text"
          >
            <mu-icon left size="32" value="warning"></mu-icon>Item has been
            already added to these lists:
            <mu-list dense="true">
              <mu-list-item
                :button="false"
                :ripple="false"
                v-for="(listTitle, key, index) in failedListAdditions"
                v-bind:key="index"
                class="duplicate-lists"
              >
                <mu-list-item-action class="duplicate-lists">
                  <mu-icon value="error_outline"></mu-icon>
                </mu-list-item-action>
                <mu-list-item-title class="duplicate-lists-title">
                  <em>{{ listTitle }}</em>
                </mu-list-item-title>
              </mu-list-item>
            </mu-list>
            <mu-icon
              value="check_circle"
              color="rgb(206, 150, 67)"
              class="duplicate-check-mark"
            ></mu-icon
            >If you had other lists, those were added though!
            <div class="dismiss-button">
              <mu-button color="grey800" @click="showFailureAlert = false"
                >Dismiss</mu-button
              >
            </div>
          </mu-alert>
        </mu-dialog>
        <!-- Gear Items Component -->
        <GearItems
          :gearLists="gearLists"
          @updateDashboardSuccessMessage="updateSuccessMessage"
          @updateFailedLists="updateFailureListAdditions"
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
      failedListAdditions: []
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
    updateFailureListAdditions(failedLists) {
      console.log("Here's failure msg for dashboard: ", failedLists);
      this.failedListAdditions = failedLists;
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
.alert-text {
  color: white !important;
}
.success-alert {
  border: 10px solid #59cd59 !important;
}
.failure-alert {
  border: 10px solid orange !important;
}
.mu-alert-delete-icon {
  height: 22px !important;
  width: 22px !important;
}
.mu-warning-color {
  background-color: rgb(255, 200, 58);
}
.duplicate-list-alert {
  line-height: 1.5em;
  font-weight: lighter;
}
.dismiss-button {
  margin: 15px 15px 0px auto;
}
.duplicate-lists {
  color: rgb(206, 150, 67) !important;
}
.duplicate-lists-title {
  color: white !important;
}
.duplicate-check-mark {
  margin-right: 10px;
}
</style>
