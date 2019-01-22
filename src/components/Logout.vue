<template>
  <div></div>
</template>

<script>
export default {
  name: "Logout",
  created() {
    console.log("Logging out");
    this.$router.push({ name: "home" });
  }
};
</script>
<style>
</style>
