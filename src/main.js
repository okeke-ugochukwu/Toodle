import { createApp } from 'vue';
import App from './App.vue';
import store from './store';
import VueTablerIcons from "vue-tabler-icons";
// import tablerIconsPlugin  from './plugins/install-tabler-icons';


createApp(App)
    .use(store)
    .use(VueTablerIcons)
    .mount('#app');
