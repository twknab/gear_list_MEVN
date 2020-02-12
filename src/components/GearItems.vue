<template>
  <div>
    <mu-row gutter class="margin-bottom">
      <mu-col span="12">
        <mu-list
          textline="three-line"
          class="dashboard-list"
          v-if="this.userGearItems.length > 0"
        >
          <mu-list-item
            avatar
            button
            v-for="(gearItem, index) in userGearItems.slice(0, this.limit)"
            :key="index"
          >
            <mu-list-item-content>
              <mu-list-item-title>{{ gearItem.title }}</mu-list-item-title>
              <mu-list-item-sub-title
                >Weight: {{ gearItem.weight }} oz</mu-list-item-sub-title
              >
            </mu-list-item-content>
            <!-- Paperclip Attach Button -->
            <AttachSingleItemToManyLists
              :gearItem="gearItem"
              :gearLists="gearLists"
              @successMessage="updateSuccessMessage"
              @failureMessage="updateFailureMessage"
            />
            <!-- Edit Button -->
            <mu-list-item-action>
              <mu-button icon @click="editGearItem(gearItem._id)">
                <mu-icon color="purpleA400" value="edit" size="36"></mu-icon>
              </mu-button>
            </mu-list-item-action>
            <!-- Delete Button -->
            <mu-list-item-action>
              <mu-button icon @click="confirmDeleteItem(gearItem._id)">
                <mu-icon color="purpleA700" value="delete" size="36"></mu-icon>
              </mu-button>
            </mu-list-item-action>
          </mu-list-item>
        </mu-list>
        <div v-else>
          <mu-flex justify-content="center" class="margin-top">
            <h2>Add some Gear Items!</h2>
            <mu-icon
              color="purpleA700"
              value="terrain"
              size="56"
              justify-content="end"
              class="margin-left-md"
            ></mu-icon>
          </mu-flex>
        </div>
      </mu-col>
    </mu-row>
    <mu-row v-if="isJustAFewItems" gutter>
      <mu-col span="12" sm="12" md="12" lg="12" xl="12">
        <AddGearItemButton />
      </mu-col>
    </mu-row>
    <mu-row v-else gutter>
      <mu-col span="12" sm="12" md="12" lg="6" xl="6">
        <AddGearItemButton />
      </mu-col>
      <mu-col span="12" sm="12" md="12" lg="6" xl="6">
        <mu-flex justify-content="center">
          <SeeMoreButton
            :buttonText="'See More Items'"
            :currentLimit="this.limit"
            @updateLimit="updateGearItemsLimit"
          />
        </mu-flex>
      </mu-col>
    </mu-row>
  </div>
</template>

<script>
import AttachSingleItemToManyLists from "@/components/AttachSingleItemToManyLists.vue";
import GearItemService from "@/services/GearItemService.js";
import AddGearItemButton from "@/components/buttons/AddGearItemButton";
import SeeMoreButton from "@/components/buttons/SeeMoreButton";
import ModelConstants from "@/constants/modelConstants";
export default {
  name: "GearItems",
  props: {
    gearLists: {
      type: Array
    },
    deleteItemConfirmation: {
      type: Object
    }
  },
  components: {
    AttachSingleItemToManyLists,
    AddGearItemButton,
    SeeMoreButton
  },
  data() {
    return {
      limit: 4,
      errors: {},
      userGearItems: [],
      isJustAFewItems: true,
      FILE_BUG: "Kindly file a bug report."
    };
  },
  watch: {
    deleteItemConfirmation: function(confirmation) {
      if (confirmation.success) {
        this.actuallyForeverDeleteGearItem(confirmation.id);
      }
    }
  },
  beforeMount() {
    this.getAllUserGearItems();
  },
  methods: {
    editGearItem(gearItemId) {
      this.$router.push({ name: "editGearItem", params: { id: gearItemId } });
    },
    getAllUserGearItems() {
      GearItemService.getAllGearItemsForUser()
        .then(response => {
          this.userGearItems = Object.values(response.data.gearItems);
          if (this.userGearItems.length < this.limit) {
            this.limit = this.userGearItems.length;
          }
          this.isJustAFewItems = this.userGearItems.length <= this.limit;
        })
        .catch(err => {
          this.errors = err;
        });
    },
    updateGearItemsLimit(newLimit) {
      this.limit = newLimit;
      this.getAllUserGearItems();
    },
    confirmDeleteItem(itemId) {
      // trigger dialogue, run below if confirmed
      this.$emit(
        "updateDashboardDeleteConfirmation",
        "Are you sure you want to delete this item? It will be forever deleted and removed from all lists to which it belongs.",
        itemId,
        ModelConstants.gearItem
      );
    },
    actuallyForeverDeleteGearItem(itemId) {
      GearItemService.deleteGearItem(itemId)
        .then(response => {
          this.updateSuccessMessage(response.data.successMessage);
          this.getAllUserGearItems();
        })
        .catch(err => {
          console.log(err);
          this.updateFailureMessage(["Problem deleting item.", this.FILE_BUG]);
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

<style>
.mu-item-action {
  min-width: 48px;
}
</style>
