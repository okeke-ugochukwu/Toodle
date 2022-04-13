import { createApp } from 'vue';
import App from './App.vue';
import store from './store';
import Icons from './tabler-icons'


createApp(App)
    .use(store)
    .use(Icons)
    .mount('#app');
