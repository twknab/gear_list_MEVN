<template>
  <div class="home">
    <mu-container>
      <mu-row gutter>
        <mu-col span="12" sm="12" md="6" lg="6" xl="6">
          <div class="grid-cell">
            <img
              alt="Welcome to GearList"
              src="https://loremflickr.com/250/250/nature"
              class="welcome-image"
            >
            <Welcome msg="Welcome to Your Vue.js App"/>
          </div>
        </mu-col>
        <mu-col span="12" sm="12" md="6" lg="6" xl="6">
          <div class="grid-cell">
            <Login/>
            <Register/>
          </div>
        </mu-col>
      </mu-row>
    </mu-container>
  </div>
</template>

<script>
// @ is an alias to /src
import Welcome from "@/components/Welcome.vue";
import Register from "@/components/Register.vue";
import Login from "@/components/Login.vue";

export default {
  name: "home",
  components: {
    Welcome,
    Register,
    Login
  }
};
</script>
