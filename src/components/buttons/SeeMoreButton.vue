<template>
  <mu-button
    full-width
    large
    round
    color="grey800"
    @click="increaseGearListLimit"
  >
    <mu-icon left value="expand_more"></mu-icon>
    {{ buttonText }}
  </mu-button>
</template>

<script>
export default {
  name: "SeeMoreButton",
  props: {
    buttonText: {
      type: String,
      required: true
    },
    currentLimit: {
      type: Number,
      required: true
    }
  },
  methods: {
    increaseGearListLimit() {
      let newLimit = this.currentLimit + 4;
      this.$emit("updateLimit", newLimit);
    }
  }
};
</script>

<style></style>
