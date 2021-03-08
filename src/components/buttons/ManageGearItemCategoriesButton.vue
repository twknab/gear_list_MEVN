<template>
  <!-- TODO: Update click path so it goes to manage page rather than add category page -->
  <mu-button
    large
    round
    color="grey800"
    @click="$router.push({ name: 'addGearItemCategory' })"
    class="margin-bottom-md margin-left-md"
  >
    <mu-icon value="add"></mu-icon>
    <span class="button-icon">Manage Categories</span>
  </mu-button>
</template>

<script>
export default {
  name: "ManageGearItemCategoriesButton"
};
</script>

<style></style>
