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
    error: colors.amberA200,
    track: "#bdbdbd",
    text: {
      primary: "#fff",
      secondary: "#fafafa",
      alternate: "#fff",
      disabled: "#e1e1e1",
      hint: "#e1e1e1" // 提示文字颜色
    },
    divider: "#e1e1e1",
    background: {
      paper: "#212121",
      chip: "#e0e0e0",
      default: "#212121"
    }
  },
  "light"
);

theme.use("gearListTheme");

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
