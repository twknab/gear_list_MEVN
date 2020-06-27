<template>
  <div>
    <mu-dialog title="GearList Privacy Policy" width="360" :open.sync="isOpen">
      <h3>What We Collect</h3>
      <p>Lorem ipsum</p>
      <h3>What We do with Your Data</h3>
      <p>Lorem ipsum</p>
      <h3>Third Party Services</h3>
      <p>Lorem ipsum</p>
      <h3>Request Data Deletion</h3>
      <p>Lorem ipsum</p>
      <mu-button slot="actions" flat color="primary" @click="closePP"
        >Close</mu-button
      >
    </mu-dialog>
  </div>
</template>

<script>
export default {
  name: "DialogPrivacyPolicy",
  props: {
    isOpen: {
      type: Boolean,
      required: true
    }
  },
  methods: {
    closePP() {
      this.$emit("closePPDialog");
    }
  }
};
</script>

<style></style>
