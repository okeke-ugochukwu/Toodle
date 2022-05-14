import { createApp } from 'vue';
import App from './App.vue';
import store from './store';
import VueTablerIcons from "vue-tabler-icons";
import router from './router'
// import tablerIconsPlugin  from './plugins/install-tabler-icons';


createApp(App)
    .use(router)
    .use(store)
    .use(VueTablerIcons)
    .mount('#app');
