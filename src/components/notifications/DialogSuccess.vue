<template>
  <div>
    <mu-dialog
      width="600"
      max-width="80%"
      class="notification-dialogue"
      :esc-press-close="true"
      :overlay-close="true"
      :open.sync="isOpen"
      :overlay="true"
      :overlay-opacity="0.8"
    >
      <mu-alert
        color="success"
        v-if="isOpen"
        delete
        @delete="closeSuccess"
        transition="mu-scale-transition"
        class="custom-alert success-alert"
      >
        <mu-icon left size="32" value="check_circle"></mu-icon>
        <p>{{ message }}</p>
      </mu-alert>
    </mu-dialog>
  </div>
</template>

<script>
export default {
  name: "DialogSuccess",
  props: {
    isOpen: {
      type: Boolean,
      required: true
    },
    message: {
      type: String,
      default: "Done!"
    }
  },
  methods: {
    closeSuccess() {
      this.$emit("closeSuccessDialog");
    }
  }
};
</script>

<style>
.success-alert p {
  color: white !important;
}
</style>
