<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>{{ `${Object.keys(things)[0]} ${things["hello"]}`}}</h2>
  </div>
</template>

<script>
import MainService from "@/services/MainService.js";
export default {
  name: "HelloWorld",
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
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
