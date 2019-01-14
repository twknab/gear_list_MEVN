<template>
  <div>
    <mu-appbar style="width: 100%;" color="primary">
      <mu-button icon slot="right" @click="openBottomSheet">
        <mu-icon value="menu"></mu-icon>
      </mu-button>🎒 GearList
    </mu-appbar>
    <mu-container>
      <mu-bottom-sheet :open.sync="open">
        <mu-list @item-click="closeBottomSheet">
          <mu-sub-header>Where To Boss?</mu-sub-header>
          <mu-list-item button @click="goHome">
            <mu-list-item-action>
              <mu-icon value="face" color="purpleA700"></mu-icon>
            </mu-list-item-action>
            <mu-list-item-title>Login / Sign Up</mu-list-item-title>
          </mu-list-item>
          <mu-list-item button @click="goToAbout">
            <mu-list-item-action>
              <mu-icon value="code" color="purpleA400"></mu-icon>
            </mu-list-item-action>
            <mu-list-item-title>About GearList</mu-list-item-title>
          </mu-list-item>
          <mu-list-item button @click="goToContact">
            <mu-list-item-action>
              <mu-icon value="chat" color="purpleA200"></mu-icon>
            </mu-list-item-action>
            <mu-list-item-title>Reach Out</mu-list-item-title>
          </mu-list-item>
        </mu-list>
      </mu-bottom-sheet>
    </mu-container>
  </div>
</template>

<script>
export default {
  name: "Navigation",
  data() {
    return {
      open: false
    };
  },
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
