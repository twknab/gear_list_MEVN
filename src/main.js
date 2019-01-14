import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import MuseUI from "muse-ui";
import "muse-ui/dist/muse-ui.css";
import theme from "muse-ui/lib/theme";
import * as colors from "muse-ui/lib/theme/colors";

Vue.config.productionTip = false;

// Invoke MuseUI Material CSS Framework for our Vue app
Vue.use(MuseUI);

// Setup our custom theme
theme.add(
  "gearListTheme",
  {
    primary: colors.purple,
    secondary: colors.purple900,
    success: "#4caf50",
    warning: "#fdd835",
    info: colors.blue,
    error: "#f44336",
    track: "#bdbdbd",
    text: {
      primary: "rgba(0, 0, 0, 0.87)",
      secondary: "#000",
      alternate: "#fff",
      disabled: "rgba(0, 0, 0, 0.38)",
      hint: "rgba(0, 0, 0, 0.38)" // 提示文字颜色
    },
    divider: "rgba(0, 0, 0, 0.12)",
    background: {
      paper: "#fff",
      chip: "#e0e0e0",
      default: "#fafafa"
    }
  },
  "dark"
);

theme.use("gearListTheme");

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
