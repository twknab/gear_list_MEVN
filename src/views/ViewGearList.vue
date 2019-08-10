<template>
  <div>
    <mu-container>
      <mu-row gutter>
        <mu-col span="12">
          <h1>{{ list.title }}</h1>
          {{ list._id }}
        </mu-col>
      </mu-row>
    </mu-container>
  </div>
</template>

<script>
import navItems from "@/components/navigation/dashboardNavItems.js";
import GearListService from "@/services/GearListService.js";
export default {
  name: "ViewGearList",
  data() {
    return {
      errors: {},
      list: {}
    };
  },
  created() {
    this.updatePrimaryNav(this.navItems);
    this.getGeatListAndItems(this.$route.params.id);
  },
  methods: {
    updatePrimaryNav(navItems) {
      this.$emit("updateNav", navItems);
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
