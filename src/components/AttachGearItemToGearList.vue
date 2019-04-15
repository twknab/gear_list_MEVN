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
      overlay="true"
      overlay-color="#000"
      lock-scroll="false"
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
          v-model="filterable.value"
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
      <mu-button slot="actions" flat color="primary" @click="closeAlertDialog">Add Item</mu-button>
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
      citys: [
        "Alabama",
        "Alaska",
        "American Samoa",
        "Arizona",
        "Arkansas",
        "California",
        "Colorado",
        "Connecticut",
        "Delaware",
        "District of Columbia",
        "Federated States of Micronesia",
        "Florida",
        "Georgia",
        "Guam",
        "Hawaii",
        "Idaho",
        "Illinois",
        "Indiana",
        "Iowa",
        "Kansas",
        "Kentucky",
        "Louisiana",
        "Maine",
        "Marshall Islands",
        "Maryland",
        "Massachusetts",
        "Michigan",
        "Minnesota",
        "Mississippi",
        "Missouri",
        "Montana",
        "Nebraska",
        "Nevada",
        "New Hampshire",
        "New Jersey",
        "New Mexico",
        "New York",
        "North Carolina",
        "North Dakota",
        "Northern Mariana Islands",
        "Ohio",
        "Oklahoma",
        "Oregon",
        "Palau",
        "Pennsylvania",
        "Puerto Rico",
        "Rhode Island",
        "South Carolina",
        "South Dakota",
        "Tennessee",
        "Texas",
        "Utah",
        "Vermont",
        "Virgin Island",
        "Virginia",
        "Washington",
        "West Virginia",
        "Wisconsin",
        "Wyoming"
      ],
      filterable: {
        value: []
      }
    };
  },
  methods: {
    openAlertDialog() {
      this.openAlert = true;
    },
    closeAlertDialog() {
      this.openAlert = false;
    }
  }
};
</script>

<style>
/* .mu-checkbox-label {
  color: rgba(255, 255, 255, 0.678) !important;
} */

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
  background-color: #d500f9;
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
