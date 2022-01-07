import { createApp } from 'vue';
import App from './App.vue';
import Router from './router';
import PrimeVue from 'primevue/config';
import 'primevue/resources/themes/saga-blue/theme.css';
import 'primevue/resources/primevue.min.css';
import 'primeflex/primeflex.css';
import 'primeicons/primeicons.css';
import axios from 'axios';
import Store from './store';

const app = createApp(App);
app.use(Router);
app.use(Store);
app.use(PrimeVue).mount('#app');
