<template>
  <div>
    <mu-row gutter>
      <!-- New Gear Item Button -->
      <mu-col span="12" sm="12" md="12" lg="12" xl="12">
        <mu-flex justify-content="end">
          <mu-button
            full-width
            large
            round
            color="purpleA700"
            @click="$router.push({name: 'addGearItem'})"
          >
            <mu-icon value="add"></mu-icon>
            <span class="button-icon">New Gear Item</span>
          </mu-button>
        </mu-flex>
      </mu-col>
    </mu-row>
  </div>
</template>

<script>
export default {
  name: "AddGearItemButton"
};
</script>

<style>
</style>
