<template>
  <div>
    <mu-list-item-action>
      <mu-button icon @click="openAlertDialog">
        <mu-icon color="purpleA400" value="attach_file" size="36"></mu-icon>
      </mu-button>
    </mu-list-item-action>
    <mu-form ref="GearItemForm" :model="gearListSelections">
      <mu-dialog
        v-bind:title="`Attach ${gearItem.title} to Lists`"
        width="600"
        max-width="100%"
        overlay-color="#000"
        :lock-scroll="true"
        :esc-press-close="true"
        :overlay-close="false"
        :open.sync="openAlert"
        transition="slide-bottom"
        scrollable
      >
        <mu-col span="12" lg="12" sm="12">
          <mu-form-item prop="selections">
            <mu-select
              filterable
              multiple
              chips
              full-width
              class="add-to-gear-list-drop-down"
              v-model="gearListSelections.values"
              prop="selections"
              max-height="60%"
              textline="two-line"
            >
              <mu-option
                v-for="(gearList, key) in gearLists"
                :key="key"
                :label="gearList.title"
                :value="gearList._id"
                prop="selections"
                class="gear-list-dropdown--selections"
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
          @click="AttachItemToGearLists"
          >Update</mu-button
        >
      </mu-dialog>
    </mu-form>
  </div>
</template>

<script>
import GearListService from "@/services/GearListService.js";
export default {
  name: "AttachSingleItemToManyLists",
  props: {
    gearItem: {
      type: Object
    },
    gearLists: {
      type: Array
    }
  },
  data() {
    return {
      openAlert: false,
      gearListSelections: {
        values: []
      },
      errors: {}
    };
  },
  methods: {
    openAlertDialog() {
      this.openAlert = true;
      this.getItemLists();
    },
    closeAlertDialog() {
      this.openAlert = false;
    },
    getItemLists() {
      GearListService.findListsWithItem(this.gearItem._id)
        .then(result => {
          this.gearListSelections.values = result.data.map(list => list._id);
        })
        .catch(err => {
          console.log(err);
        });
    },
    AttachItemToGearLists() {
      GearListService.findListsWithItem(this.gearItem._id)
        .then(itemSavedLists => {
          GearListService.attachOneItemToManyLists({
            gearItemId: this.gearItem._id,
            itemSavedListsIds: itemSavedLists.data.map(list => list._id),
            itemSelectedListIds: this.gearListSelections.values
          })
            .then(response => {
              if (response.data.success) {
                this.$emit("successMessage", response.data.successMessage);
                console.log("1. going to refresh list now");
                this.$emit("refreshGearLists");
                this.closeAlertGotoDashboard();
              } else {
                this.$emit("failureMessage", response.data.errors);
                this.closeAlertGotoDashboard();
              }
            })
            .catch(err => {
              console.log(err);
            });
        })
        .catch(err => {
          console.log(err);
        });
    },
    closeAlertGotoDashboard() {
      this.openAlert = false;
      this.$router.push({ name: "dashboard" });
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
.gear-list-dropdown--selections .mu-item-title {
  line-height: 25px;
}
</style>
