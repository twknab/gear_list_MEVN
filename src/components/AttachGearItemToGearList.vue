<template>
  <div>
    <mu-list-item-action>
      <mu-button icon @click="openAlertDialog">
        <!-- mu-button was formerly v-bind:to="'/gear-list/add' +  gearItem._id" -->
        <mu-icon color="purpleA400" value="attach_file" size="36"></mu-icon>
      </mu-button>
    </mu-list-item-action>
    <mu-dialog
      v-bind:title="'Add ' + gearItem.title +  ' to a Gear List'"
      width="600"
      max-width="80%"
      overlay-color="#000"
      :lock-scroll="false"
      :esc-press-close="false"
      :overlay-close="false"
      :open.sync="openAlert"
      transition="slide-bottom"
    >
      <mu-col span="12" lg="12" sm="12">
        <mu-select
          filterable
          multiple
          chips
          v-model="gearListSelections.values"
          full-width
          class="add-to-gear-list-drop-down"
        >
          <mu-option
            v-for="(gearList, key, index) in gearLists"
            :key="key"
            :label="gearList.title"
            :value="gearList._id"
          ></mu-option>
        </mu-select>
      </mu-col>
      <mu-button slot="actions" flat color="grey800" @click="closeAlertDialog">Nevermind</mu-button>
      <mu-button slot="actions" flat color="primary" @click="addItemToGearList">Add Item</mu-button>
    </mu-dialog>
  </div>
</template>

<script>
export default {
  name: "AttachGearItemToGearList",
  props: {
    gearItem: {
      type: Object
    },
    gearLists: {
      type: Object
    }
  },
  data() {
    return {
      openAlert: false,
      gearListSelections: {
        values: []
      }
    };
  },
  beforeMount() {
    // console.log("THIS IS THE GEAR LISTS");
    // console.log(this.gearLists);
    // console.log(typeof this.gearLists);
    // console.log("$$$$$$");
  },
  methods: {
    openAlertDialog() {
      this.openAlert = true;
    },
    closeAlertDialog() {
      this.openAlert = false;
    },
    addItemToGearList() {
      this.openAlert = false;
      console.log(this.gearListSelections.values);
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
