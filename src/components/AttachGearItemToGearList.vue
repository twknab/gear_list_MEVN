<template>
  <div>
    <mu-list-item-action>
      <mu-button icon @click="openAlertDialog">
        <mu-icon color="purpleA400" value="attach_file" size="36"></mu-icon>
      </mu-button>
    </mu-list-item-action>
    <mu-form ref="attachGearItemForm" :model="gearListSelections">
      <mu-dialog
        v-bind:title="`${gearItem.title}`"
        width="600"
        max-width="80%"
        overlay-color="#000"
        :lock-scroll="false"
        :esc-press-close="true"
        :overlay-close="false"
        :open.sync="openAlert"
        transition="slide-bottom"
      >
        <mu-col span="12" lg="12" sm="12">
          <mu-form-item prop="selections" :rules="addGearListSelectionsRule">
            <mu-select
              filterable
              multiple
              chips
              full-width
              class="add-to-gear-list-drop-down"
              v-model="gearListSelections.values"
              prop="selections"
            >
              <mu-option
                v-for="(gearList, key) in gearLists"
                :key="key"
                :label="gearList.title"
                :value="gearList._id"
                prop="selections"
              ></mu-option>
            </mu-select>
          </mu-form-item>
        </mu-col>
        <mu-button slot="actions" flat color="grey800" @click="closeAlertDialog"
          >Nevermind</mu-button
        >
        <mu-button
          slot="actions"
          flat
          color="primary"
          @click="attachItemToGearLists"
          >Update</mu-button
        >
      </mu-dialog>
    </mu-form>
  </div>
</template>

<script>
import GearListService from "@/services/GearListService.js";
export default {
  name: "AttachGearItemToGearList",
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
    attachItemToGearLists() {
      GearListService.findListsWithItem(this.gearItem._id)
        .then(itemSavedLists => {
          GearListService.attachItemToLists({
            gearItemId: this.gearItem._id,
            itemSavedListsIds: itemSavedLists.data.map(list => list._id),
            itemSelectedListIds: this.gearListSelections.values
          })
            .then(message => {
              if (message.data.success) {
                this.$emit("successMessage", message.data.successMessage);
                this.closeAlertGotoDashboard();
              } else {
                console.log("Unfortunately, not everything was successful...");
                console.log("Here's what came back: ", message.data);
                this.$emit("failureMessage", message.data.errors);
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
.mu-checkbox {
  color: #d500f9 !important;
}
.mu-option.is-selected .mu-item {
  color: #aa00ff;
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
  /* margin-top: 10px !important; */
  margin-bottom: 10px !important;
  color: rgb(189, 159, 48) !important;
}
</style>
