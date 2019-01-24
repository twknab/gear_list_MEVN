<template>
  <div>
    <mu-row gutter>
      <mu-col span="12" sm="12" md="12" lg="12" xl="12">
        <div>
          <mu-button
            round
            full-width
            color="purpleA400"
            @click="$router.push({name: 'addGearList'})"
            large
          >
            <mu-icon value="library_add"></mu-icon>
            <span class="button-icon">New Gear List</span>
          </mu-button>
        </div>
      </mu-col>
    </mu-row>
  </div>
</template>

<script>
export default {
  name: "AddGearListButton"
};
</script>

<style>
</style>
