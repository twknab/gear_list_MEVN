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
          <mu-flex :key="item" v-for="item in list.items">
            <mu-checkbox
              :value="item"
              v-model="checkedItems"
              :label="item.title"
            ></mu-checkbox>
          </mu-flex>
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
      checkedItems: []
    };
  },
  created() {
    this.updatePrimaryNav();
    this.getGeatListAndItems(this.$route.params.id);
  },
  methods: {
    updatePrimaryNav() {
      this.$emit("updateNav");
    },
    getGeatListAndItems(listId) {
      GearListService.getListAndItems(listId)
        .then(listAndItems => {
          // Update DOM
          console.log("Here's the gear list and items: ", listAndItems.data);
          this.list = listAndItems.data;
        })
        .catch(err => {
          console.log("Something's gone wrong: ", err);
        });
    }
  }
};
</script>

<style></style>
