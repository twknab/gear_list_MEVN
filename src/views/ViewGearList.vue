<template>
  <div>
    <mu-container class="padding-all-md">
      <mu-flex justify-content="center" class="margin-top margin-left-sm">
        <mu-icon
          color="purpleA700"
          value="terrain"
          size="73"
          justify-content="before"
          class="margin-right-md margin-top-sm"
        ></mu-icon>
        <h1>{{ listTitle }}</h1>
      </mu-flex>
      <mu-divider></mu-divider>
      <mu-row gutter class="margin-top-md padding-top-lg padding-bottom-lg">
        <mu-col span="12">
          <div v-if="Object.keys(this.itemCompletionData).length > 0">
            <mu-list textline="three-line" class="dashboard-list">
              <mu-list-item
                button
                :key="itemData._id"
                v-for="itemData in itemCompletionData"
                @click="
                  updateCompleteStatus(
                    itemData.gearItem,
                    listId,
                    !itemData.completed
                  )
                "
              >
                <mu-list-item-action>
                  <mu-icon
                    size="42"
                    class="margin-right-md"
                    :value="
                      itemData.completed
                        ? 'check_box'
                        : 'check_box_outline_blank'
                    "
                    :color="itemData.completed ? '#494949' : 'purpleA700'"
                  ></mu-icon>
                </mu-list-item-action>
                <mu-list-item-content
                  :class="
                    itemData.completed
                      ? 'gear-item-list-item completed-gear-item'
                      : 'gear-item-list-item'
                  "
                >
                  <mu-list-item-title>
                    {{ itemData.gearItem.title }}
                  </mu-list-item-title>
                  <mu-list-item-sub-title>
                    {{ itemData.gearItem.weight }} oz.
                  </mu-list-item-sub-title>
                </mu-list-item-content>
                <mu-list-item-action>
                  <mu-button
                    icon
                    color="purpleA400"
                    placement="bottom-end"
                    @click="removeItemFromList(itemData.gearItem._id)"
                  >
                    <mu-icon value="clear" size="36"></mu-icon>
                  </mu-button>
                </mu-list-item-action>
              </mu-list-item>
            </mu-list>
            <mu-divider class="margin-bottom"></mu-divider>
            <mu-flex justify-content="center" fill>
              <h2 class="gear-list-total-weight-header">
                Weight Packed:
                <mu-chip
                  color="purpleA700"
                  text-color="white"
                  class="margin-left-sm total-weight-chip"
                  >{{ totalPackedLbs }}</mu-chip
                >
                <span class="margin-left-sm">of {{ totalGrossLbs }} lbs.</span>
                <span
                  class="list-weight-sub-units margin-left-sm margin-top-md"
                >
                  {{ totalPackedOz }} of {{ totalGrossOz }} oz.</span
                >
              </h2>
            </mu-flex>
          </div>
          <div v-else>
            <mu-flex justify-content="center" class="margin-top">
              <h3>Add some Gear Items, this list is empty!</h3>
              <mu-icon
                color="purpleA700"
                value="offline_bolt"
                size="36"
                justify-content="end"
                class="margin-left-sm empty-list"
              ></mu-icon>
            </mu-flex>
          </div>
          <AttachManyItemsToSingleList
            :openAlert="this.showAttachItemsDialog"
            :watchGearListToAttachListView="this.gearListToQuickAttachListView"
            :watchRefreshListItems="this.refreshListItems"
            @successMessage="updateSuccessMessage"
            @failureMessage="updateFailureMessage"
            @closeAttachItemsDialog="closeAttachItemsDialog"
          />
        </mu-col>
      </mu-row>
      <mu-divider
        v-if="Object.keys(this.itemCompletionData).length > 0"
      ></mu-divider>
      <mu-flex justify-content="center" class="margin-top margin-left-sm">
        <mu-button
          large
          round
          color="purpleA700"
          @click="this.showAttachItemsToListDialog"
          class="margin-left-sm"
        >
          <mu-icon left value="attach_file"></mu-icon>Attach Items
        </mu-button>
        <mu-button
          large
          flat
          color="primary"
          @click="$router.push({ name: 'dashboard' })"
          class="margin-left-sm"
        >
          <mu-icon left value="arrow_back"></mu-icon>Back to Dashboard
        </mu-button>
      </mu-flex>
    </mu-container>
  </div>
</template>

<script>
import AttachManyItemsToSingleList from "@/components/AttachManyItemsToSingleList";
import GearListService from "@/services/GearListService.js";
import GearItemService from "@/services/GearItemService.js";
import UnitConversionUtils from "@/helpers/UnitConversionUtils.js";
export default {
  name: "ViewGearList",
  components: {
    AttachManyItemsToSingleList
  },
  data() {
    return {
      errors: {},
      listTitle: "",
      showAttachItemsDialog: false,
      gearListToQuickAttachListView: "",
      listId: null,
      refreshListItems: false,
      totalPackedOz: 0,
      totalPackedLbs: 0,
      itemCompletionData: [{ completed: false, gearItem: {} }]
    };
  },
  watch: {
    watchUpdateGearListsAfterAttach: function(status) {
      if (status === true) {
        this.getGearListAndItemCompletions(this.listId);
      }
    }
  },
  computed: {
    totalGrossOz: function() {
      let itemWeights = this.itemCompletionData.map(
        data => data.gearItem.weight
      );
      return UnitConversionUtils.totalGrossOz(itemWeights);
    },
    totalGrossLbs: function() {
      let itemWeights = this.itemCompletionData.map(
        data => data.gearItem.weight
      );
      return UnitConversionUtils.totalGrossLbs(itemWeights);
    }
  },
  created() {
    this.updatePrimaryNav();
    this.getGearListAndItemCompletions(this.$route.params.id);
  },
  methods: {
    updatePrimaryNav() {
      this.$emit("updateNav");
    },
    getGearListAndItemCompletions(listId) {
      GearListService.getListAndItemCompletions({ gearListId: listId })
        .then(listAndItems => {
          this.itemCompletionData = listAndItems.data.itemCompletions;
          this.listTitle = listAndItems.data.listName;
          this.listId = listAndItems.data.listId;
          this.getTotalPackedWeight();
          this.resetRefreshItems();
        })
        .catch(err => {
          console.log("Fetching item completion data failed: ", err);
        });
    },
    getTotalPackedWeight: function() {
      let totalOz = 0;
      let totalLbs = 0;
      this.itemCompletionData.forEach(data => {
        if (data.completed) {
          totalOz = totalOz + data.gearItem.weight;
        }
      });
      // Developer Note: now that you have the gross total in OZ, you could convert to other units. You could also expand your gear item model to allow for different unit inputs,  but all this busisness logic here would have to be updated to reflect the new pattern
      totalLbs = totalOz / 16;
      this.totalPackedLbs = this.roundToAtMostTwoDecimalPlaces(totalLbs);
      this.totalPackedOz = totalOz;
    },
    showAttachItemsToListDialog() {
      this.gearListToQuickAttachListView = this.listId;
      this.showAttachItemsDialog = true;
    },
    updateCompleteStatus(item, listId, complete) {
      if (complete) {
        this.totalPackedOz += item.weight;
      } else {
        let decrementedWeight = (this.totalPackedOz -= item.weight);
        this.totalPackedOz = decrementedWeight > 0 ? decrementedWeight : 0;
      }
      GearItemService.changeCompleteStatus(item._id, listId, complete)
        .then(() => {
          // refresh gear items
          this.getGearListAndItemCompletions(this.$route.params.id);
        })
        .catch(err => {
          console.log("Marking complete failed...", err);
        });
    },
    roundToAtMostTwoDecimalPlaces(floatValue) {
      return Math.round(floatValue * 100 + Number.EPSILON) / 100;
    },
    closeAttachItemsDialog() {
      this.showAttachItemsDialog = false;
    },
    removeItemFromList(itemId) {
      let listAndItemId = {
        listId: this.listId,
        itemId: itemId
      };
      GearListService.removeGearItemFromList(listAndItemId)
        .then(() => {
          // Refresh list
          this.refreshItems();
          this.getGearListAndItemCompletions(listAndItemId.listId);
        })
        .catch(err => {
          console.log(err);
        });
    },
    refreshItems() {
      this.refreshListItems = true;
    },
    resetRefreshItems() {
      this.refreshListItems = false;
    },
    updateSuccessMessage(message) {
      // TODO: Turn messaging into a component
      // Get updated list after
      console.log(message);
      this.closeAttachItemsDialog();
      this.getGearListAndItemCompletions(this.listId);
    },
    updateFailureMessage(messages) {
      // TODO: Turn messaging into its own component
      console.log(messages);
      this.closeAttachItemsDialog();
    }
  }
};
</script>

<style>
.gear-item-list-item .mu-item-title {
  font-size: 20px;
}
.gear-item-list-item .mu-item-sub-title {
  font-size: 16px;
}
.completed-gear-item {
  text-decoration: line-through;
  font-style: italic;
  color: white;
  font-weight: lighter;
}
.empty-list {
  position: relative;
  top: 10px;
}
.total-weight-chip {
  font-size: 18px;
  margin: auto 5px auto 5px;
  text-shadow: 1px 1px 1px black;
  cursor: default !important;
  font-weight: 600;
}
.list-weight-sub-units {
  display: block;
  font-weight: 300;
  font-size: 14px;
  text-align: center;
}
.gear-list-total-weight-header {
  font-weight: 300;
}
</style>
