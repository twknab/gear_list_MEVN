import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue")
    },
    {
      path: "/contact",
      name: "contact",
      component: () =>
        import(/* webpackChunkName: "contact" */ "./views/Contact.vue")
    },
    {
      path: "/register",
      name: "register",
      component: () =>
        import(/* webpackChunkName: "register" */ "./views/Register.vue")
    },
    {
      path: "/dashboard",
      name: "dashboard",
      component: () =>
        import(/* webpackChunkName: "dashboard" */ "./views/Dashboard.vue")
    },
    {
      path: "/gear/item",
      name: "addGearItem",
      component: () =>
        import(/* webpackChunkName: "addNewGearItem" */ "./views/AddGearItem.vue")
    },
    {
      path: "/gear/list",
      name: "addGearList",
      component: () =>
        import(/* webpackChunkName: "addNewGearList" */ "./views/AddGearList.vue")
    },
    {
      path: "/gear/list/:id",
      name: "viewGearList",
      component: () =>
        import(/* webpackChunkName: "viewGearList" */ "./views/ViewGearList.vue")
    },
    {
      path: "/logout",
      name: "logout",
      component: () =>
        import(/* webpackChunkName: "logout" */ "./components/Logout.vue")
    }
  ],
  scrollBehavior() {
    return { x: 0, y: 0 };
  }
});
