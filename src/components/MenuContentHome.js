module.exports = {
  data: `
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
  `
};
