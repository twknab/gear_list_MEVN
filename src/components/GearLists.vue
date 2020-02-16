<template>
  <div>
    <mu-row gutter class="margin-bottom">
      <mu-col span="12" sm="12" md="12" lg="12" xl="12">
        <div class="margin-bottom">
          <mu-list
            textline="three-line"
            class="dashboard-list"
            v-if="this.userGearLists.length > 0"
          >
            <mu-list-item
              avatar
              button
              v-for="(gearList, index) in userGearLists.slice(0, this.limit)"
              :key="index"
              @click="viewGearList(gearList._id)"
            >
              <mu-list-item-content>
                <mu-list-item-title>{{ gearList.title }}</mu-list-item-title>
                <mu-list-item-sub-title>
                  Total Weight: {{ gearList.totalWeightInLbs }} lbs.
                </mu-list-item-sub-title>
              </mu-list-item-content>
              <mu-list-item-action>
                <mu-menu cover placement="bottom-end" :open-on-hover="true">
                  <mu-button icon color="purpleA400">
                    <mu-icon value="more_vert" size="36"></mu-icon>
                  </mu-button>
                  <mu-list slot="content">
                    <!-- Quick Attach Items -->
                    <mu-list-item
                      button
                      @click="showAttachItemsToListDialog(gearList._id)"
                      ><mu-icon
                        size="20"
                        value="attach_file"
                        color="#aa00ff"
                        class="margin-right-sm margin-top-xsm"
                      ></mu-icon>
                      Quick Attach</mu-list-item
                    >
                    <!-- View -->
                    <mu-list-item button @click="viewGearList(gearList._id)"
                      ><mu-icon
                        size="20"
                        value="search"
                        color="#aa00ff"
                        class="margin-right-sm margin-top-xsm"
                      ></mu-icon
                      >View List</mu-list-item
                    >
                    <!-- Edit -->
                    <mu-list-item button @click="editGearList(gearList._id)"
                      ><mu-icon
                        size="20"
                        value="edit"
                        color="#aa00ff"
                        class="margin-right-sm margin-top-xsm"
                      ></mu-icon
                      >Edit List</mu-list-item
                    >
                    <!-- Delete -->
                    <mu-list-item
                      button
                      @click="confirmDeleteList(gearList._id)"
                      ><mu-icon
                        size="20"
                        value="delete"
                        color="#aa00ff"
                        class="margin-right-sm margin-top-xsm"
                      ></mu-icon
                      >Delete List</mu-list-item
                    >
                  </mu-list>
                </mu-menu>
              </mu-list-item-action>
            </mu-list-item>
          </mu-list>
          <div v-else>
            <mu-flex justify-content="center" class="margin-top margin-bottom">
              <h2>Create a new Gear List!</h2>
              <mu-icon
                color="purpleA700"
                value="star"
                size="56"
                justify-content="end"
                class="margin-left-md"
              ></mu-icon>
            </mu-flex>
          </div>
        </div>
        <!-- This dialog opens when quick attach is triggered -->
        <AttachManyItemsToSingleList
          :openAlert="this.showAttachItemsDialog"
          :watchGearListToAttachDashboard="this.gearListToQuickAttachDashboard"
          @successMessage="updateSuccessMessage"
          @failureMessage="updateFailureMessage"
          @closeAttachItemsDialog="closeAttachItemsDialog"
        />
      </mu-col>
    </mu-row>
    <mu-row v-if="isJustAFewLists" gutter>
      <mu-col span="12" sm="12" md="12" lg="12" xl="12">
        <AddGearListButton />
      </mu-col>
    </mu-row>
    <mu-row v-else gutter>
      <mu-col span="12" sm="12" md="12" lg="6" xl="6">
        <AddGearListButton />
      </mu-col>
      <mu-col span="12" sm="12" md="12" lg="6" xl="6">
        <mu-flex justify-content="center">
          <SeeMoreButton
            :buttonText="'See More Lists'"
            :currentLimit="this.limit"
            @updateLimit="updateGearListsLimit"
          />
        </mu-flex>
      </mu-col>
    </mu-row>
  </div>
</template>

<script>
import GearListService from "@/services/GearListService.js";
import AddGearListButton from "@/components/buttons/AddGearListButton";
import AttachManyItemsToSingleList from "@/components/AttachManyItemsToSingleList";
import SeeMoreButton from "@/components/buttons/SeeMoreButton";
import ModelConstants from "@/constants/modelConstants";
import UnitConversionUtils from "@/helpers/UnitConversionUtils.js";
export default {
  name: "GearLists",
  props: {
    watchDeleteListConfirmation: {
      type: Object
    },
    watchUpdateGearListsAfterAttach: {
      type: Boolean
    }
  },
  components: {
    AddGearListButton,
    AttachManyItemsToSingleList,
    SeeMoreButton
  },
  data() {
    return {
      limit: 4,
      open: false,
      userGearLists: [],
      showAttachItemsDialog: false,
      gearListToQuickAttachDashboard: "",
      isJustAFewLists: true,
      FILE_BUG: "Kindly file a bug report."
    };
  },
  computed: {
    getEachGearListTotalWeight: function() {
      this.userGearLists.forEach(list => {
        const itemWeights = list.items.map(item => item.weight);
        list.totalWeightInLbs = UnitConversionUtils.totalGrossLbs(itemWeights);
      });
      return this.userGearLists;
    }
  },
  watch: {
    watchDeleteListConfirmation: function(confirmation) {
      if (confirmation.success) {
        this.actuallyForeverDeleteGearList(confirmation.id);
      }
    },
    watchUpdateGearListsAfterAttach: function(status) {
      if (status === true) {
        this.getAllUserGearLists();
      }
    }
  },
  beforeMount() {
    this.getAllUserGearLists();
  },
  methods: {
    editGearList(gearListId) {
      this.$router.push({ name: "editGearList", params: { id: gearListId } });
    },
    showAttachItemsToListDialog(gearListId) {
      this.gearListToQuickAttachDashboard = gearListId;
      this.showAttachItemsDialog = true;
    },
    viewGearList(gearListId) {
      // redirect to gear list view page passing in gearListId as a parameter
      this.$router.push({ name: "viewGearList", params: { id: gearListId } });
    },
    updateGearListsLimit(newLimit) {
      this.limit = newLimit;
      // get all gear lists now with new limit
      this.getAllUserGearLists();
    },
    getAllUserGearLists() {
      GearListService.getAllGearListsForUser()
        .then(response => {
          this.userGearLists = Object.values(response.data.gearLists);
          this.userGearLists = this.getEachGearListTotalWeight();
          if (this.userGearLists.length < this.limit) {
            this.limit = this.userGearLists.length;
          }
          this.isJustAFewLists = this.userGearLists.length <= this.limit;
          this.$emit("updateAllGearLists", this.userGearLists);
        })
        .catch(err => {
          console.log(err);
          this.errors = err;
        });
    },
    closeAttachItemsDialog() {
      this.showAttachItemsDialog = false;
    },
    confirmDeleteList(listId) {
      // trigger dialogue, run below if confirmed
      this.$emit(
        "updateDashboardDeleteConfirmation",
        "Are you sure you want to delete this list? It will be forever deleted and all containing items will be marked incomplete.",
        listId,
        ModelConstants.gearList
      );
    },
    actuallyForeverDeleteGearList(gearListId) {
      GearListService.deleteGearList(gearListId)
        .then(response => {
          this.updateSuccessMessage(response.data.successMessage);
          this.getAllUserGearLists();
        })
        .catch(err => {
          console.log(err);
          this.updateFailureMessage(["Problem deleting list.", this.FILE_BUG]);
        });
    },
    updateSuccessMessage(messageText) {
      this.$emit("updateDashboardSuccessMessage", messageText);
    },
    updateFailureMessage(messages) {
      this.$emit("updateDashboardFailureMessage", messages);
    }
  }
};
</script>

<style></style>
