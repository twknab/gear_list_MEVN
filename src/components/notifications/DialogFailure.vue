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
        color="rgb(255, 200, 58)"
        v-if="isOpen"
        transition="mu-scale-transition"
        class="custom-alert failure-alert"
      >
        <mu-icon left size="32" value="warning"></mu-icon>
        <h2>Whoops, something went wrong:</h2>
        <mu-list :dense="true" v-if="Object.keys(failureDetails).length > 0">
          <mu-list-item
            :button="false"
            :ripple="false"
            v-for="(errorMessage, key, index) in failureDetails"
            v-bind:key="index"
            class="failure-alert-text"
          >
            <mu-list-item-action class="failure-alert-text">
              <mu-icon value="error_outline"></mu-icon>
            </mu-list-item-action>
            <mu-list-item-title class="failure-alert-text-title">
              <em>{{ errorMessage }}</em>
            </mu-list-item-title>
          </mu-list-item>
        </mu-list>
        <div class="dismiss-button">
          <mu-button color="rgba(79, 78, 78, 0.55)" @click="closeFailure()"
            >OK, got it</mu-button
          >
        </div>
      </mu-alert>
    </mu-dialog>
  </div>
</template>

<script>
export default {
  name: "DialogFailure",
  props: {
    isOpen: {
      type: Boolean,
      required: true
    },
    message: {
      type: String,
      default: "Error! Please contact Admin if this persists."
    },
    failureDetails: {
      type: Object
    }
  },
  methods: {
    closeFailure() {
      this.$emit("closeFailureDialog");
    }
  }
};
</script>

<style>
.failure-alert p {
  color: rgb(34, 34, 34) !important;
}
</style>
