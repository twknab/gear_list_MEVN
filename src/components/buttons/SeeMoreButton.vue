<template>
  <mu-button full-width large round color="grey800">
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
    }
  }
};
</script>

<style></style>
