/*
The question is, how do we make our navigation change when we are in the dashboard?

I tried exporting modules of objects and strings that contained HTML, however this was not being injected properly and the menu was not building correctly.

The other solution I believe is most correct, is to use vg-if tags, and using $routeParam to understand what page we're on. If we are on DASHBOARD, than show this menu, etc, etc. There is probably a better way to build a dynamic navigation and I may want to read about that a little...but that is one solution, use if-else to change our navigation options based on if we're on one of the backend pages...the thing is, we may have multiple backend pages so we will also have to check to see if it's any one of those
*/
<template>
  <div>
    <mu-appbar style="width: 100%;" color="purpleA700">
      <mu-button icon slot="right" @click="openBottomSheet">
        <mu-icon value="menu"></mu-icon>
      </mu-button>🎒 GearList
    </mu-appbar>
    <mu-container>
      <mu-bottom-sheet :open.sync="open">
        <!-- <pre style="color: black;">{{navigationItems}}</pre> -->
        <mu-list @item-click="closeBottomSheet">
          <mu-sub-header>Where To Boss?</mu-sub-header>

          <mu-list-item
            button
            v-for="(navItem, key, index) in navigationItems"
            :key="index"
            @click="$router.push({ name: navItem.route })"
          >
            <mu-list-item-action>
              <mu-icon :value="navItem.icon" :color="navItem.color"></mu-icon>
            </mu-list-item-action>
            <mu-list-item-title>{{navItem.title}}</mu-list-item-title>
          </mu-list-item>
        </mu-list>
      </mu-bottom-sheet>
    </mu-container>
  </div>
</template>

<script>
export default {
  name: "Navigation",
  props: {
    navigationItems: {
      type: Object,
      default: () => {
        return {
          dashboard: {
            icon: "face",
            color: "purpleA700",
            title: "Login / Sign Up",
            route: "home"
          },
          addGearItem: {
            icon: "code",
            color: "purpleA400",
            title: "About Gear List",
            route: "about"
          },
          addGearList: {
            icon: "chat",
            color: "purpleA200",
            title: "Reach Out",
            route: "contact"
          }
        };
      }
    }
  },
  data() {
    return {
      open: false
    };
  },
  created() {},
  methods: {
    closeBottomSheet() {
      this.open = false;
    },
    openBottomSheet() {
      this.open = true;
    },
    goHome() {
      this.$router.push({ name: "home" });
    },
    goToAbout() {
      this.$router.push({ name: "about" });
    },
    goToContact() {
      this.$router.push({ name: "contact" });
    }
  }
};
</script>

<style>
</style>
