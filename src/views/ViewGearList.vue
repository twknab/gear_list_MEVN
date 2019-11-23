<template>
  <div>
    <mu-container>
      <mu-row gutter>
        <mu-col span="12">
          <h1>{{ list.title }}</h1>
        </mu-col>
      </mu-row>
      <mu-row gutter>
        <mu-col span="12">
          <div v-if="Object.keys(this.list.items).length > 0">
            <mu-flex :key="item" v-for="item in list.items">
              <mu-checkbox
                :value="item._id"
                v-model="completedItems"
                :label="item.title"
                @change="updateCompleteStatus(item._id)"
              ></mu-checkbox>
            </mu-flex>
          </div>
          <div v-else>
            <mu-flex justify-content="center" class="margin-top">
              <h3>Add some Gear Items, this list is empty!</h3>
              <mu-icon
                color="purpleA700"
                value="offline_bolt"
                size="36"
                justify-content="end"
                class="margin-left-sm empty-list"
              ></mu-icon>
            </mu-flex>
          </div>
        </mu-col>
      </mu-row>
    </mu-container>
  </div>
</template>

<script>
import GearListService from "@/services/GearListService.js";
export default {
  name: "ViewGearList",
  data() {
    return {
      errors: {},
      list: {},
      completedItems: []
    };
  },
  created() {
    this.updatePrimaryNav();
    this.getGearListAndItems(this.$route.params.id);
  },
  methods: {
    updatePrimaryNav() {
      this.$emit("updateNav");
    },
    getGearListAndItems(listId) {
      GearListService.getListAndItems(listId)
        .then(listAndItems => {
          // Update DOM
          console.log("Here's the gear list and items: ", listAndItems.data);
          this.list = listAndItems.data;
        })
        .catch(err => {
          console.log("Something's gone wrong: ", err);
        });
    },
    updateCompleteStatus(itemId) {
      console.log("MARKING COMPLETE");
      console.log(this.completedItems);
      console.log(itemId);
      GearListService.changeCompleteStatus(itemId, this.list._id)
        .then(() => {
          this.getGearListAndItems(this.$route.params.id);
        })
        .catch(err => {
          console.log("Marking complete failed: ", err);
        });
      // create service method that makes mutation in controller
    }
  }
};
</script>

<style>
.mu-checkbox-label {
  color: #fff;
}
.empty-list {
  position: relative;
  top: 10px;
}
</style>
