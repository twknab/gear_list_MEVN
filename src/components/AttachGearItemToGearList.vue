<template>
  <div>
    <mu-list-item-action>
      <mu-button icon @click="openAlertDialog">
        <mu-icon color="purpleA400" value="attach_file" size="36"></mu-icon>
      </mu-button>
    </mu-list-item-action>
    <mu-form ref="attachGearItemForm" :model="gearListSelections">
      <mu-dialog
        v-bind:title="'Add ' + gearItem.title +  ' to a Gear List'"
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
            <!-- Backend Errors Display -->
            <div v-if="Object.keys(errors).length >= 1" class="server-errors">
              <h2>Whoops, there's a few issues...</h2>
              <ul>
                <li v-for="(error, key, index) in errors" :key="index">{{ error.message }}</li>
              </ul>
            </div>
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
        <mu-button slot="actions" flat color="grey800" @click="closeAlertDialog">Nevermind</mu-button>
        <mu-button slot="actions" flat color="primary" @click="addItemToGearList">Add Item</mu-button>
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
      errors: {},
      addGearListSelectionsRule: [
        {
          validate: () => {
            console.log(this.gearListSelections.values);
            if (this.gearListSelections.values < 1) {
              return false;
            } else {
              return true;
            }
          },
          message: "Gear List selection is required."
        }
      ]
    };
  },
  methods: {
    openAlertDialog() {
      this.openAlert = true;
    },
    closeAlertDialog() {
      this.openAlert = false;
    },
    addItemToGearList() {
      console.log(this.gearListSelections.values);
      console.log(this.gearItem._id);
      this.$refs.attachGearItemForm.validate().then(result => {
        if (result) {
          this.openAlert = false;
          GearListService.addItemToList({
            gearItem: this.gearItem._id,
            gearLists: this.gearListSelections.values
          })
            .then(() => {
              this.$router.push({ name: "dashboard" });
            })
            .catch(error => {
              console.log(error);
              // this.errors = error.response.data;
            });
        }
      });
      // send data to service to write to db
      // return errors if any validation issues
      // reload dashboard
    },
    validateSelections() {
      console.log("Validating...");
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
</style>
