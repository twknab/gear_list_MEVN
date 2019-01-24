<template>
  <div>
    <mu-row gutter>
      <mu-col span="12" sm="12" md="12" lg="12" xl="12">
        <div>
          <mu-list
            textline="three-line"
            class="dashboard-list"
            v-if="Object.keys(this.userGearLists).length > 0"
          >
            <mu-list-item
              avatar
              button
              v-for="(gearList, key, index) in userGearLists"
              :key="index"
              @click="viewGearList(index)"
            >
              <mu-list-item-content>
                <mu-list-item-title>{{gearList.title}}</mu-list-item-title>
                <mu-list-item-sub-title>{{gearList.date}}</mu-list-item-sub-title>
              </mu-list-item-content>
              <mu-list-item-action>
                <mu-menu cover placement="bottom-end" :open-on-hover="true">
                  <mu-button icon color="purpleA400">
                    <mu-icon value="more_vert" size="36"></mu-icon>
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
            <h3>Add a Gear List to Get Started!</h3>
          </div>
        </div>
      </mu-col>
      <mu-col span="12" sm="12" md="12" lg="12" xl="12">
        <mu-flex justify-content="center" v-if="Object.keys(userGearLists).length">
          <mu-button flat full-width color="purpleA700">
            <mu-icon left value="expand_more"></mu-icon>View More
          </mu-button>
        </mu-flex>
      </mu-col>
    </mu-row>
  </div>
</template>

<script>
import userGearLists from "@/dummy_data/gearListDummyData.js";
export default {
  name: "GearLists",
  data() {
    return {
      current: 1,
      open: false,
      userGearLists
    };
  },
  methods: {
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
