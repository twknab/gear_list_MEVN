<template>
  <mu-col span="12" sm="12" md="12" lg="6" xl="6">
    <mu-button
      full-width
      large
      round
      color="purpleA400"
      @click="$router.push({name: 'addGearList'})"
      class="margin-bottom-md"
    >
      <mu-icon value="library_add"></mu-icon>
      <span class="button-icon">New Gear List</span>
    </mu-button>
  </mu-col>
</template>

<script>
export default {
  name: "AddGearListButton"
};
</script>

<style>
</style>
