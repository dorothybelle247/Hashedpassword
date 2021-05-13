import { createApp } from 'vue'
import "bootswatch/dist/lux/bootstrap.min.css";

import App from './App.vue'
import router from './router';

Vue.config.productionTip = false

createApp({
    router,
    render: h => h(App),
  }).$mount('#app');
