<template>
  <div class="hello">
    <mu-container>
      <mu-col span="12">
        <img alt="Welcome to GearList" src="../assets/tent.png" class="welcome-image image-center">
      </mu-col>
    </mu-container>
    <!-- Welcome Image -->
  </div>
</template>

<script>
import MainService from "@/services/MainService.js";
export default {
  name: "Welcome",
  props: {
    msg: String
  },
  data() {
    return {
      things: null
    };
  },
  methods: {
    test() {
      MainService.getThings()
        .then(response => {
          this.things = response.data;
        })
        .catch(error => {
          console.log(error.response);
        });
    }
  },
  created() {
    this.test();
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
