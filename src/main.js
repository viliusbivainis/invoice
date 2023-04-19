
import "@/bootstrap.js";
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import PrimeVue from 'primevue/config';

import App from './App.vue'
import router from './router'

import "primevue/resources/themes/saga-blue/theme.css";
import "primevue/resources/primevue.min.css";
import "primeflex/primeflex.css";
import 'primeicons/primeicons.css';

import "@fontsource/open-sans/400.css";
import "@fontsource/open-sans/700.css";


import './assets/main.css'



const app = createApp(App)

app.use(PrimeVue);
app.use(createPinia())
app.use(router)

app.mount('#app')

