<template>
  <mu-button
    full-width
    large
    round
    color="purpleA700"
    @click="$router.push({ name: 'addGearItem' })"
    class="margin-bottom-md"
  >
    <mu-icon value="add"></mu-icon>
    <span class="button-icon">Add Gear Item</span>
  </mu-button>
</template>

<script>
export default {
  name: "AddGearItemButton"
};
</script>

<style></style>
