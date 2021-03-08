import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import UserService from "./services/UserService";

Vue.use(Router);

const routesThatDoNotRequireAuthentication = [
  "/",
  "/about",
  "/register",
  "/login"
];
const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    { path: "*", name: "home", component: Home }, // serves Home component on 404
    {
      path: "/about",
      name: "about",
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue")
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
      path: "/gear/item/attach/:id",
      name: "attachItemToGearLists",
      component: () =>
        import(/* webpackChunkName: "attachItemToGearLists" */ "./views/AttachSingleItemToManyGearLists.vue")
    },
    {
      path: "/gear/item-category",
      name: "addGearItemCategory",
      component: () =>
        import(/* webpackChunkName: "addNewGearItemCategory" */ "./views/AddGearItemCategory.vue")
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
      path: "/gear/list/attach/:id",
      name: "attachItemsToGearList",
      component: () =>
        import(/* webpackChunkName: "attachItemsToGearList" */ "./views/AttachManyItemsToSingleGearList.vue")
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

/*
  Read more about `router.beforeEach` here: 
  https://router.vuejs.org/guide/advanced/navigation-guards.html#global-before-guards
*/
router.beforeEach((to, from, next) => {
  if (routesThatDoNotRequireAuthentication.includes(to.path) === false) {
    // user must be authenticaed, check now:
    UserService.getLoggedInUser()
      .then(() => {
        next();
      })
      .catch(err => {
        // if no user retreived will fail here and run `router.onError()`
        next(err);
      });
  } else {
    // safe and no authentication needed
    next();
  }
});

router.onError(() => {
  // this will run if `next(err)` is called
  router.push({ name: "home" });
});

export default router;
