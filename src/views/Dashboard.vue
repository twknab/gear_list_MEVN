<template>
  <div>
    <mu-container class="demo-container is-stripe">
      <mu-row gutter>
        <mu-col span="12" sm="12" md="12" lg="12" xl="12">
          <h1>Your Dashboard</h1>
        </mu-col>
        <mu-col span="12" sm="12" md="12" lg="12" xl="12">
          <div class="grid-cell">
            <h2>Gear Lists</h2>
            <mu-button round color="purpleA400" @click="submit" large>
              <mu-icon value="library_add"></mu-icon>
              <span class="button-icon">New Gear List</span>
            </mu-button>
          </div>
        </mu-col>
        <mu-col span="12" sm="12" md="12" lg="12" xl="12">
          <div class="grid-cell">
            <mu-list textline="two-line" class="dashboard-gear-list">
              <mu-list-item avatar button>
                <mu-list-item-action>
                  <mu-avatar color="deepPurple300">
                    <mu-icon value="list"></mu-icon>
                  </mu-avatar>
                </mu-list-item-action>
                <mu-list-item-content>
                  <mu-list-item-title>Front Country Minimal Camping</mu-list-item-title>
                  <mu-list-item-sub-title>Jan 9, 2014</mu-list-item-sub-title>
                </mu-list-item-content>
                <mu-list-item-action>
                  <mu-button icon color="purpleA400">
                    <mu-icon value="more_vert"></mu-icon>
                  </mu-button>
                </mu-list-item-action>
              </mu-list-item>
              <mu-list-item avatar button>
                <mu-list-item-action>
                  <mu-avatar color="deepPurple300">
                    <mu-icon value="list"></mu-icon>
                  </mu-avatar>
                </mu-list-item-action>
                <mu-list-item-content>
                  <mu-list-item-title>Front Country Luxury Camping</mu-list-item-title>
                  <mu-list-item-sub-title>Jan 9, 2014</mu-list-item-sub-title>
                </mu-list-item-content>
                <mu-list-item-action>
                  <mu-button icon color="purpleA400">
                    <mu-icon value="more_vert"></mu-icon>
                  </mu-button>
                </mu-list-item-action>
              </mu-list-item>
              <mu-list-item avatar button>
                <mu-list-item-action>
                  <mu-avatar color="deepPurple300">
                    <mu-icon value="list"></mu-icon>
                  </mu-avatar>
                </mu-list-item-action>
                <mu-list-item-content>
                  <mu-list-item-title>Back Country Light Weight Camping</mu-list-item-title>
                  <mu-list-item-sub-title>Jan 9, 2014</mu-list-item-sub-title>
                </mu-list-item-content>
                <mu-list-item-action>
                  <mu-button icon color="purpleA400">
                    <mu-icon value="more_vert"></mu-icon>
                  </mu-button>
                </mu-list-item-action>
              </mu-list-item>
            </mu-list>
          </div>
        </mu-col>
        <mu-col span="4" sm="6" md="8" lg="9" xl="11">
          <div class="grid-cell">
            <h2>Gear Items</h2>
          </div>
        </mu-col>
        <mu-col span="8" sm="6" md="4" lg="3" xl="1">
          <div class="grid-cell">
            <h2>Add Gear Item</h2>
          </div>
        </mu-col>
      </mu-row>
    </mu-container>
  </div>
</template>

<script>
export default {
  name: "Dashboard"
};
</script>

<style>
</style>
