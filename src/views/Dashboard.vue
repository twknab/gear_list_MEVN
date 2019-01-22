<template>
  <div>
    <mu-container class="demo-container is-stripe">
      <mu-row gutter>
        <mu-col span="12" sm="12" md="12" lg="12" xl="12">
          <h1>Your Dashboard</h1>
        </mu-col>
        <mu-col span="12" sm="12" md="12" lg="12" xl="12">
          <div class="grid-cell">
            <h2>View Gear Lists</h2>
            <br>
            <mu-button round color="purpleA400" @click="newGearList" large>
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
                  <mu-avatar color="grey700">
                    <mu-icon value="list"></mu-icon>
                  </mu-avatar>
                </mu-list-item-action>
                <mu-list-item-content>
                  <mu-list-item-title>Front Country Minimal Camping</mu-list-item-title>
                  <mu-list-item-sub-title>Jan 9, 2014</mu-list-item-sub-title>
                </mu-list-item-content>
                <mu-list-item-action>
                  <mu-menu cover placement="bottom-end" :open.sync="open" :open-on-hover="true">
                    <mu-button icon color="purpleA200">
                      <mu-icon value="more_vert"></mu-icon>
                    </mu-button>
                    <mu-list slot="content">
                      <mu-list-item button>
                        <mu-list-item-title>View</mu-list-item-title>
                      </mu-list-item>
                      <mu-list-item button>
                        <mu-list-item-title>Edit</mu-list-item-title>
                      </mu-list-item>
                      <mu-list-item button>
                        <mu-list-item-title>Delete</mu-list-item-title>
                      </mu-list-item>
                    </mu-list>
                  </mu-menu>
                </mu-list-item-action>
              </mu-list-item>
              <mu-list-item avatar button>
                <mu-list-item-action>
                  <mu-avatar color="grey700">
                    <mu-icon value="list"></mu-icon>
                  </mu-avatar>
                </mu-list-item-action>
                <mu-list-item-content>
                  <mu-list-item-title>Front Country Luxury Camping</mu-list-item-title>
                  <mu-list-item-sub-title>Jan 9, 2014</mu-list-item-sub-title>
                </mu-list-item-content>
                <mu-list-item-action>
                  <mu-button icon color="purpleA200">
                    <mu-icon value="more_vert"></mu-icon>
                  </mu-button>
                </mu-list-item-action>
              </mu-list-item>
              <mu-list-item avatar button>
                <mu-list-item-action>
                  <mu-avatar color="grey700">
                    <mu-icon value="list"></mu-icon>
                  </mu-avatar>
                </mu-list-item-action>
                <mu-list-item-content>
                  <mu-list-item-title>Back Country Light Weight Camping</mu-list-item-title>
                  <mu-list-item-sub-title>Jan 9, 2014</mu-list-item-sub-title>
                </mu-list-item-content>
                <mu-list-item-action>
                  <mu-button icon color="purpleA200">
                    <mu-icon value="more_vert"></mu-icon>
                  </mu-button>
                </mu-list-item-action>
              </mu-list-item>
            </mu-list>
          </div>
        </mu-col>
        <mu-col span="12">
          <mu-flex justify-content="center">
            <mu-pagination raised s:total="35" :current.sync="current"></mu-pagination>
          </mu-flex>
        </mu-col>
        <mu-col span="4" sm="6" md="8" lg="9" xl="11">
          <div class="grid-cell">
            <h2>View Gear Items</h2>
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
  name: "Dashboard",
  data() {
    return {
      current: 1,
      open: false,
      searchGearLists: "",
      navItems: {
        dashboard: {
          icon: "dashboard",
          color: "purpleA700",
          title: "Dashboard",
          route: "dashboard"
        },
        addGearItem: {
          icon: "add_box",
          color: "purpleA400",
          title: "New Gear Item",
          route: "addNewGearItem"
        },
        addGearList: {
          icon: "library_add",
          color: "purpleA200",
          title: "New Gear List",
          route: "addNewGearList"
        },
        logout: {
          icon: "phonelink_off",
          color: "purpleA700",
          title: "Log Off",
          route: "logout"
        }
      }
    };
  },
  created() {
    this.updatePrimaryNav(this.navItems);
  },
  methods: {
    updatePrimaryNav(navItems) {
      this.$emit("updateNavigation", navItems);
    },
    newGearList() {
      console.log("Adding gear list popup");
    }
  }
};
</script>

<style>
</style>
