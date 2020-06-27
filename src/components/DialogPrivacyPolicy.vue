<template>
  <div>
    <mu-dialog title="GearList Privacy Policy" width="360" :open.sync="isOpen">
      Privacy Policy Dialog
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
