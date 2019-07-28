<template>
  <mu-button
    full-width
    large
    round
    color="purpleA400"
    @click="$router.push({ name: 'addGearList' })"
    class="margin-bottom-md"
  >
    <mu-icon value="library_add"></mu-icon>
    <span class="button-icon">New Gear List</span>
  </mu-button>
</template>

<script>
export default {
  name: "AddGearListButton"
};
</script>

<style></style>
