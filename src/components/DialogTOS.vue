<template>
  <div>
    <mu-dialog
      title="GearList Terms of Service"
      width="360"
      :open.sync="isOpen"
    >
      TOS Dialog
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
