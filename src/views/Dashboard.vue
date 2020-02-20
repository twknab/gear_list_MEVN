<template>
  <div>
    <mu-container class="margin-top dashboard-wrapper">
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
      <GearLists
        :watchDeleteListConfirmation="watchDeleteListConfirmation"
        :watchUpdateGearListsAfterAttach="triggerGlobalGearListUpdate"
        @updateAllGearLists="updateGearListsForUser"
        @updateDashboardSuccessMessage="updateSuccessMessage"
        @updateDashboardFailureMessage="updateFailureMessages"
        @updateDashboardDeleteConfirmation="updateConfimDeleteMessage"
      />

      <mu-divider class="margin-top-xl"></mu-divider>
      <!-- Gear Items -->
      <div class="margin-top-xl">
        <h1>Gear Items</h1>
        <!-- Success Notification -->
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
            <p>{{ successMessage }}</p>
          </mu-alert>
        </mu-dialog>
        <!-- Warning Notification -->
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
            <mu-icon left size="32" value="warning"></mu-icon>
            <h2>Whoops, something went wrong:</h2>
            <mu-list :dense="true">
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
        <!-- Confirm deletion dialogue -->
        <mu-dialog
          width="700"
          max-width="100%"
          class="error-dialogue"
          :esc-press-close="true"
          :overlay-close="true"
          :open.sync="openDeleteDialogue"
          :overlay="true"
          :overlay-opacity="0.8"
        >
          <mu-icon value="delete_forever" size="32" left></mu-icon>
          <h2 class="delete-dialogue-title">Totally Sure to Delete?</h2>
          <p>{{ deleteMessage }}</p>
          <mu-row gutter>
            <mu-col span="12" sm="12" md="12" lg="12" xl="12">
              <mu-button
                color="rgba(79, 78, 78, 0.55)"
                :full-width="true"
                class="margin-top"
                large
                round
                @click="cancelDelete"
              >
                <mu-icon value="close"></mu-icon>
                <span class="button-icon">Nevermind</span>
              </mu-button>
            </mu-col>
          </mu-row>
          <mu-row gutter>
            <mu-col span="12" sm="12" md="12" lg="12" xl="12">
              <mu-button
                large
                full-width
                round
                color="#FA0D3F"
                class="margin-top-md margin-bottom-md confirm-delete"
                @click="confirmDelete"
              >
                <mu-icon value="delete_outline"></mu-icon>
                <span class="button-icon">Yes, delete forever!</span>
              </mu-button>
            </mu-col>
          </mu-row>
        </mu-dialog>
        <!-- Gear Items Component -->
        <GearItems
          :gearLists="gearLists"
          :watchDeleteConfirmation="watchDeleteConfirmation"
          @updateDashboardGearLists="updateDashboardGearLists"
          @updateDashboardSuccessMessage="updateSuccessMessage"
          @updateDashboardFailureMessage="updateFailureMessages"
          @updateDashboardDeleteConfirmation="updateConfimDeleteMessage"
        />
      </div>
    </mu-container>
  </div>
</template>

<script>
import navItems from "@/components/navigation/dashboardNavItems.js";
import GearLists from "@/components/GearLists.vue";
import GearItems from "@/components/GearItems.vue";
import ModelConstants from "@/constants/modelConstants";
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
      failureMessages: [],
      deleteMessage: "",
      triggerGlobalGearListUpdate: false,
      openDeleteDialogue: false,
      idToDelete: null,
      whatToDelete: null,
      watchDeleteConfirmation: { success: false, id: null },
      watchDeleteListConfirmation: { success: false, id: null }
    };
  },
  computed: {
    timeGreeting: function() {
      const currentHour = new Date().getHours();
      let greeting = "";
      if (0 <= currentHour && currentHour <= 5) {
        greeting = "You must be up late or up early";
      } else if (6 >= currentHour && currentHour <= 11) {
        greeting = "Good morning";
      } else if (12 >= currentHour && currentHour <= 16) {
        greeting = "Good afternoon";
      } else {
        greeting = "Good evening";
      }
      return greeting;
    }
  },
  beforeCreate() {
    this.$emit("updateNavigation", navItems);
    this.$emit("getGloballyLoggedInUser");
  },
  methods: {
    updateDashboardGearLists() {
      this.triggerGlobalGearListUpdate = true;
    },
    updateGearListsForUser(gearLists) {
      this.gearLists = Object.values(gearLists);
      // reset global update status
      this.triggerGlobalGearListUpdate = false;
    },
    updateSuccessMessage(message) {
      this.successMessage = message;
      this.showSuccessAlert = true;
    },
    updateFailureMessages(messages) {
      this.failureMessages = messages;
      this.showFailureAlert = true;
    },
    updateConfimDeleteMessage(message, id, typeToDelete) {
      this.deleteMessage = message;
      this.idToDelete = id;
      this.whatToDelete = typeToDelete;
      this.openDeleteDialogue = true;
    },
    confirmDelete() {
      // Actually delete the thing
      if (this.whatToDelete === ModelConstants.gearItem) {
        this.watchDeleteConfirmation = { success: true, id: this.idToDelete };
      } else if (this.whatToDelete === ModelConstants.gearList) {
        this.watchDeleteListConfirmation = {
          success: true,
          id: this.idToDelete
        };
      }
      this.openDeleteDialogue = false;
    },
    cancelDelete() {
      this.openDeleteDialogue = false;
      this.idToDelete = null;
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
.delete-dialogue-title {
  display: inline-block;
  bottom: 6px;
  position: relative;
  margin-left: 15px;
}
.error-dialogue > div:nth-child(1) {
  border-radius: 15px;
  border: 10px solid #2e2e2e;
}
.error-dialogue .mu-dialog-body {
  background-color: #1a1a1a;
}
.dashboard-wrapper {
  padding-bottom: 30px;
}
</style>
