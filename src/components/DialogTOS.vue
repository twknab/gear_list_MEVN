<template>
  <div>
    <mu-dialog
      title="GearList Terms of Service"
      width="360"
      :open.sync="isOpen"
    >
      <p>
        By registering with GearList and using this tool, you agree to the
        following:
      </p>
      <h3>Thing 1</h3>
      <p>Lorem ipsum</p>
      <h3>Thing 2</h3>
      <p>Lorem ipsum</p>
      <h3>Personal Data</h3>
      <p>Lorem ipsum</p>
      <mu-button slot="actions" flat color="primary" @click="closeTOS"
        >Close</mu-button
      >
    </mu-dialog>
  </div>
</template>

<script>
export default {
  name: "DialogTOS",
  props: {
    isOpen: {
      type: Boolean,
      required: true
    }
  },
  methods: {
    closeTOS() {
      this.$emit("closeTOSDialog");
    }
  }
};
</script>

<style></style>
