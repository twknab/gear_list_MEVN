<template>
  <div></div>
</template>

<script>
import UserService from "@/services/UserService.js";
export default {
  name: "Logout",
  created() {
    UserService.logoffUser()
      .then(() => {
        this.$router.push({ name: "home" });
      })
      .catch(error => {
        console.log(error);
        this.$router.push({ name: "dashboard" });
      });
  }
};
</script>
<style></style>
