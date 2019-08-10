<template>
  <div></div>
</template>

<script>
import UserService from "@/services/UserService.js";
export default {
  name: "Logout",
  created() {
    console.log("Logging out");
    UserService.logoffUser()
      .then(message => {
        console.log(message.data.success);
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
