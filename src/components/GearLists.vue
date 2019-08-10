<template>
  <div>
    <mu-row gutter class="margin-bottom">
      <mu-col span="12" sm="12" md="12" lg="12" xl="12">
        <div class="margin-bottom">
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
              @click="viewGearList(gearList._id)"
            >
              <mu-list-item-content>
                <mu-list-item-title>{{ gearList.title }}</mu-list-item-title>
                <mu-list-item-sub-title>
                  {{ gearList.date }}
                </mu-list-item-sub-title>
              </mu-list-item-content>
              <mu-list-item-action>
                <mu-menu cover placement="bottom-end" :open-on-hover="true">
                  <mu-button icon color="purpleA400">
                    <mu-icon value="more_vert" size="36"></mu-icon>
                  </mu-button>
                  <mu-list slot="content">
                    <mu-list-item button @click="viewGearList(gearList._id)"
                      >View</mu-list-item
                    >
                    <mu-list-item button @click="editGearList(index)"
                      >Edit</mu-list-item
                    >
                    <mu-list-item button @click="deleteGearList(index)"
                      >Delete</mu-list-item
                    >
                  </mu-list>
                </mu-menu>
              </mu-list-item-action>
            </mu-list-item>
          </mu-list>
          <div v-else>
            <mu-flex justify-content="center" class="margin-top margin-bottom">
              <h2>Create a new Gear List!</h2>
              <mu-icon
                color="purpleA700"
                value="star"
                size="56"
                justify-content="end"
                class="margin-left-md"
              ></mu-icon>
            </mu-flex>
          </div>
        </div>
      </mu-col>
    </mu-row>
    <mu-row v-if="isJustAFewLists" gutter>
      <mu-col span="12" sm="12" md="12" lg="12" xl="12">
        <AddGearListButton />
      </mu-col>
    </mu-row>
    <mu-row v-else gutter>
      <mu-col span="12" sm="12" md="12" lg="6" xl="6">
        <AddGearListButton />
      </mu-col>
      <mu-col span="12" sm="12" md="12" lg="6" xl="6">
        <mu-flex justify-content="center">
          <SeeMoreButton :buttonText="'See All Lists'" />
        </mu-flex>
      </mu-col>
    </mu-row>
  </div>
</template>

<script>
import GearListService from "@/services/GearListService.js";
import AddGearListButton from "@/components/buttons/AddGearListButton";
import SeeMoreButton from "@/components/buttons/SeeMoreButton";
export default {
  name: "GearLists",
  components: {
    AddGearListButton,
    SeeMoreButton
  },
  data() {
    return {
      current: 1,
      open: false,
      userGearLists: {},
      isJustAFewLists: true
    };
  },
  beforeMount() {
    this.getAllUserGearLists();
  },
  methods: {
    editGearList(index) {
      console.log(index);
      console.log("Editing gear list...");
    },
    viewGearList(gearListId) {
      // redirect to gear list view page passing in gearListId as a parameter
      this.$router.push({ name: "viewGearList", params: { id: gearListId } });
    },
    deleteGearList(index) {
      console.log(index);
      console.log("Deleting gear list...");
    },
    getAllUserGearLists() {
      GearListService.getAllGearListsForUser()
        .then(response => {
          this.userGearLists = response.data.gearLists;
          this.isJustAFewLists = Object.keys(this.userGearLists).length <= 3;
          this.$emit("updateAllGearLists", this.userGearLists);
        })
        .catch(err => {
          console.log(err);
          this.errors = err;
        });
    }
  }
};
</script>

<style></style>
