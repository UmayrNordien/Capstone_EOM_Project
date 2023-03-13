import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import "bootstrap-icons/font/bootstrap-icons.css";
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'
import '../src/assets/css/styles.css'




createApp(App).use(store).use(router).mount('#app')