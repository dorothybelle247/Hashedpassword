import { createApp } from "vue";
import "bootswatch/dist/lux/bootstrap.min.css";
import App from "./App.vue";
import router from "./router";


createApp(App).use(router).mount("#app");