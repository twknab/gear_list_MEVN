<template>
  <div>
    <mu-container class="demo-container is-stripe">
      <mu-row gutter>
        <mu-col span="12" sm="12" md="12" lg="12" xl="12">
          <h1>Your Dashboard</h1>
        </mu-col>
        <mu-col span="12" sm="12" md="12" lg="12" xl="12">
          <div class="grid-cell">
            <h2>View Gear Lists</h2>
            <br>
            <mu-button round color="purpleA400" @click="$router.push({name: 'addGearList'})" large>
              <mu-icon value="library_add"></mu-icon>
              <span class="button-icon">New Gear List</span>
            </mu-button>
          </div>
        </mu-col>
        <mu-col span="12" sm="12" md="12" lg="12" xl="12">
          <div class="grid-cell">
            <mu-list
              textline="two-line"
              class="dashboard-gear-list"
              v-if="Object.keys(this.gearLists).length > 0"
            >
              <mu-list-item
                avatar
                button
                v-for="(gearList, key, index) in gearLists"
                :key="index"
                @click="viewGearList(index)"
              >
                <mu-list-item-action>
                  <mu-avatar color="grey700">
                    <mu-icon value="list"></mu-icon>
                  </mu-avatar>
                </mu-list-item-action>
                <mu-list-item-content>
                  <mu-list-item-title>{{gearList.title}}</mu-list-item-title>
                  <mu-list-item-sub-title>{{gearList.date}}</mu-list-item-sub-title>
                </mu-list-item-content>
                <mu-list-item-action>
                  <mu-menu cover placement="bottom-end" :open-on-hover="true">
                    <mu-button icon color="purpleA200">
                      <mu-icon value="more_vert"></mu-icon>
                    </mu-button>
                    <mu-list slot="content">
                      <mu-list-item button @click="viewGearList(index)">View</mu-list-item>
                      <mu-list-item button @click="editGearList(index)">Edit</mu-list-item>
                      <mu-list-item button @click="deleteGearList(index)">Delete</mu-list-item>
                    </mu-list>
                  </mu-menu>
                </mu-list-item-action>
              </mu-list-item>
            </mu-list>
            <div v-else>
              <h3>Add a Gear List above!</h3>
            </div>
          </div>
        </mu-col>
        <mu-col span="12">
          <mu-flex justify-content="center">
            <mu-pagination
              raised
              :total="Object.keys(gearLists).length"
              :current.sync="current"
              page-size="3"
              v-if="Object.keys(gearLists).length > 0"
            ></mu-pagination>
          </mu-flex>
        </mu-col>
        <mu-col span="4" sm="6" md="8" lg="9" xl="11">
          <div class="grid-cell">
            <h2>View Gear Items</h2>
          </div>
        </mu-col>
        <mu-col span="8" sm="6" md="4" lg="3" xl="1">
          <div class="grid-cell">
            <h2>Add Gear Item</h2>
          </div>
        </mu-col>
      </mu-row>
    </mu-container>
  </div>
</template>

<script>
import gearLists from "@/dummy_data/gearListDummyData.js";
import navItems from "@/components/navigation/dashboardNavItems.js";
export default {
  name: "Dashboard",
  data() {
    return {
      current: 1,
      open: false,
      searchGearLists: "",
      navItems,
      gearLists
    };
  },
  created() {
    this.updatePrimaryNav(this.navItems);
    console.log(Object.keys(this.gearLists).length);
  },
  methods: {
    updatePrimaryNav(navItems) {
      this.$emit("updateNavigation", navItems);
    },
    newGearList() {
      console.log("New gear list...");
    },
    editGearList(index) {
      console.log(index);
      console.log("Editing gear list...");
    },
    viewGearList(index) {
      console.log(index);
      console.log("Viewing gear list...");
    },
    deleteGearList(index) {
      console.log(index);
      console.log("Deleting gear list...");
    }
  }
};
</script>

<style>
</style>
