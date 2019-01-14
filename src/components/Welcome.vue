<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>{{ things }}</h2>
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
      console.log("Test running...");
      MainService.getThings()
        .then(response => {
          console.log(response.data);
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
