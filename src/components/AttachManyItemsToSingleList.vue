<template>
  <div>
    <mu-form ref="attachGearItemForm" :model="gearItemSelections">
      <mu-dialog
        v-bind:title="`${this.gearListTitle} Items`"
        width="600"
        max-width="100%"
        overlay-color="#000"
        :lock-scroll="true"
        :esc-press-close="true"
        :overlay-close="false"
        :open.sync="openAlert"
        transition="slide-bottom"
        class="itemAttachDialog"
        scrollable
      >
        <mu-col span="12" lg="12" sm="12">
          <mu-form-item prop="selections">
            <mu-select
              filterable
              multiple
              chips
              class="add-to-gear-list-drop-down"
              v-model="gearItemSelections.values"
              prop="selections"
              max-height="60%"
              textline="two-line"
            >
              <mu-option
                v-for="(gearItem, key) in this.allUserItems"
                :key="key"
                :label="gearItem.title"
                :value="gearItem._id"
                prop="selections"
                class="gear-list-dropdown-attach-selections"
              ></mu-option>
            </mu-select>
          </mu-form-item>
        </mu-col>
        <mu-button
          slot="actions"
          flat
          color="rgb(181, 181, 181)"
          @click="closeAlertDialog"
          >Nevermind</mu-button
        >
        <mu-button
          slot="actions"
          flat
          color="primary"
          @click="attachItemsToGearList"
          >Update</mu-button
        >
      </mu-dialog>
    </mu-form>
  </div>
</template>

<script>
import GearListService from "@/services/GearListService.js";
import GearItemService from "@/services/GearItemService.js";
export default {
  name: "AttachManyItemsToSingleList",
  props: {
    gearItems: {
      type: Array
    },
    openAlert: {
      type: Boolean
    },
    watchGearListToAttachDashboard: {
      type: String
    },
    watchGearListToAttachListView: {
      type: String
    },
    watchRefreshListItems: {
      type: Boolean
    }
  },
  data() {
    return {
      gearItemSelections: {
        values: []
      },
      gearListId: "",
      gearListTitle: "",
      allUserItems: {},
      errors: {}
    };
  },
  watch: {
    watchGearListToAttachDashboard: function(listId) {
      this.gearListId = listId;
      this.getAllItemsBelongingToUser(listId);
    },
    watchGearListToAttachListView: function(listId) {
      this.gearListId = listId;
      this.getAllItemsBelongingToUser(listId);
    },
    watchRefreshListItems: function() {
      console.log("Refresh detected");
      this.getAllItemsBelongingToUser(this.gearListId);
    }
  },
  methods: {
    closeAlertDialog() {
      this.$emit("closeAttachItemsDialog");
    },
    getAllItemsBelongingToUser(listId) {
      // get all items for user and update UI to reflect list items
      GearItemService.getAllGearItemsForUser()
        .then(userItems => {
          this.allUserItems = Object.values(userItems.data.gearItems);
          // add existing list items as chips
          GearListService.getListAndItems(listId)
            .then(userListAndListItems => {
              this.gearListTitle = userListAndListItems.data.title;
              let existingListItems = userListAndListItems.data.items.map(
                item => item._id
              );
              this.gearItemSelections.values = existingListItems;
            })
            .catch(err => {
              console.log(
                "Something's gone wrong with server side routing.: ",
                err
              );
            });
        })
        .catch(err => {
          console.log(
            "Something's gone wrong with server side routing.: ",
            err
          );
        });
    },
    attachItemsToGearList() {
      // Get all items belonging to this user
      GearListService.attachManyItemsToOneList({
        gearListId: this.gearListId,
        selectedListIds: this.gearItemSelections.values
      })
        .then(response => {
          if (response.data.success) {
            this.$emit("successMessage", response.data.successMessage);
            this.closeAlertDialog();
          } else {
            this.$emit("updateFailureMessage", response.data.errors);
            this.closeAlertDialog();
          }
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>

<style>
.mu-checkbox-icon {
  color: #d500f9;
}
.mu-item {
  color: #aa00ff;
}
.mu-option.is-selected .mu-item {
  color: #fff;
}

.mu-popover {
  background: #2b2b2b;
}

.mu-dialog {
  background-color: #212121;
}

.mu-dialog-title {
  color: #fff;
}

.mu-dialog-body {
  color: #fff;
  padding-bottom: 10px;
}

.mu-chip {
  color: #000;
  background-color: #aa00ff;
}
.mu-chip:hover {
  background-color: #d500f9 !important;
}

.mu-chip:active {
  background-color: #aa00ff;
}

.mu-input__focus {
  color: #aa00ff;
}

.mu-select-input.is-enable {
  color: white;
  font-size: 24px;
}

.mu-select-icon {
  fill: #9e9e9e;
}

.mu-dialog-actions {
  margin-bottom: 10px;
}

.server-errors {
  width: 100% !important;
}
.mu-alert {
  margin-bottom: 10px !important;
  color: rgb(189, 159, 48) !important;
}
</style>
