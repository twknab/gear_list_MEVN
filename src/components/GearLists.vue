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
            <mu-flex justify-content="center" class="margin-top margin-bottom">
              <h2>Add a Gear List to Get Started! 👍</h2>
            </mu-flex>
          </div>
        </div>
      </mu-col>
      <mu-col span="12" sm="12" md="12" lg="6" xl="6">
        <mu-flex justify-content="center" v-if="Object.keys(userGearLists).length">
          <mu-button flat full-width color="purpleA400" class="margin-bottom-md">
            <mu-icon left value="expand_more"></mu-icon>See All Lists
          </mu-button>
        </mu-flex>
      </mu-col>
      <AddGearListButton/>
    </mu-row>
  </div>
</template>

<script>
import userGearLists from "@/dummy_data/gearListDummyData.js";
import AddGearListButton from "@/components/AddGearListButton.vue";
export default {
  name: "GearLists",
  components: {
    AddGearListButton
  },
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