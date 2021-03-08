<template>
  <mu-button
    large
    round
    color="grey800"
    @click="$router.push({ name: 'addGearItemCategory' })"
    class="margin-bottom-md"
  >
    <mu-icon value="add"></mu-icon>
    <span class="button-icon">New Category</span>
  </mu-button>
</template>

<script>
export default {
  name: "AddGearItemCategoryButton"
};
</script>

<style></style>
