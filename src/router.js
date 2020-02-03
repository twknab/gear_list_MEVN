import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import UserService from "./services/UserService";

Vue.use(Router);

const routesThatAreSafe = ["/", "/about", "/register", "/login", "/contact"];
const router = new Router({
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
      path: "/gear/item/edit/:id",
      name: "editGearItem",
      component: () =>
        import(/* webpackChunkName: "editGearItem" */ "./views/EditGearItem.vue")
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
      path: "/gear/list/edit/:id",
      name: "editGearList",
      component: () =>
        import(/* webpackChunkName: "editGearList" */ "./views/EditGearList.vue")
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

router.beforeEach((to, from, next) => {
  console.log("GOING TO: ===> ", to.path);
  console.log("COMING FROM: <==== ", from.path);
  if (routesThatAreSafe.includes(to.path) === false) {
    // user must be authenticaed, check now:
    UserService.getLoggedInUser()
      .then(() => {
        next();
      })
      .catch(err => {
        next(err); // if no user retreived will fail here abd run `router.onError()`
      });
  } else {
    // safe and no authentication needed
    next();
  }
  /*
    Read more here: https://router.vuejs.org/guide/advanced/navigation-guards.html#global-before-guards
  */
});

router.onError(() => {
  // this will run if `next(err)` is called
  router.push({ name: "home" });
});

export default router;
