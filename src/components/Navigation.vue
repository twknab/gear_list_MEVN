<template>
  <div>
    <mu-appbar style="width: 100%;" color="purpleA700">
      <mu-button icon slot="right" @click="openBottomSheet">
        <mu-icon value="menu"></mu-icon> </mu-button
      ><a class="logo-link" @click="$router.push({ name: 'dashboard' })"
        >🎒 GearList</a
      >
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
            <mu-list-item-title>{{ navItem.title }}</mu-list-item-title>
          </mu-list-item>
        </mu-list>
      </mu-bottom-sheet>
    </mu-container>
  </div>
</template>

<script>
import navItems from "@/components/navigation/homeNavItems.js";
export default {
  name: "Navigation",
  props: {
    navigationItems: {
      type: Object,
      default: () => {
        return navItems;
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
    }
  }
};
</script>

<style>
.logo-link {
  color: unset !important;
  cursor: pointer;
}
</style>
