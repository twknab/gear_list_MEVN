<template>
  <div>
    <mu-row gutter>
      <mu-col span="12">
        <mu-list
          textline="three-line"
          class="dashboard-list"
          v-if="Object.keys(this.userGearItems).length > 0"
        >
          <mu-list-item avatar button v-for="(gearItem, key, index) in userGearItems" :key="index">
            <mu-list-item-content>
              <mu-list-item-title>{{gearItem.title}}</mu-list-item-title>
              <mu-list-item-sub-title>Weight: {{gearItem.weight}} oz</mu-list-item-sub-title>
            </mu-list-item-content>
            <mu-list-item-action>
              <mu-button icon to="/gear/items/gearItem.id">
                <mu-icon color="purpleA700" value="attach_file" size="36"></mu-icon>
              </mu-button>
            </mu-list-item-action>
          </mu-list-item>
        </mu-list>
        <div v-else>
          <mu-flex justify-content="center" class="margin-top margin-bottom">
            <h2>Add some Gear Items! 😁</h2>
          </mu-flex>
        </div>
      </mu-col>
    </mu-row>
    <mu-row gutter>
      <mu-col span="12" sm="12" md="12" lg="6" xl="6">
        <mu-flex justify-content="center" v-if="Object.keys(userGearItems).length > 3">
          <mu-button flat color="purpleA700" class="margin-bottom-md">
            <mu-icon left value="expand_more"></mu-icon>See All Items
          </mu-button>
        </mu-flex>
      </mu-col>
      <AddGearItemButton/>
    </mu-row>
  </div>
</template>

<script>
// import userGearItems from "@/dummy_data/gearItemsDummyData.js";
import AddGearItemButton from "@/components/AddGearItemButton.vue";
import GearItemService from "@/services/GearItemService.js";
export default {
  name: "GearItems",
  components: {
    AddGearItemButton
  },
  data() {
    return {
      errors: {},
      userGearItems: {}
    };
  },
  beforeMount() {
    this.getAllUserGearItems();
  },
  methods: {
    getAllUserGearItems() {
      GearItemService.getAllGearItemsForUser()
        .then(response => {
          this.userGearItems = response.data.gearItems;
        })
        .catch(err => {
          console.log(err);
          this.errors = err;
        });
    }
  }
};
</script>

<style>
</style>
