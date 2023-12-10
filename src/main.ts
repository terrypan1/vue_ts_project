import { createApp } from 'vue'
import { createPinia } from 'pinia'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import 'bootstrap-icons/font/bootstrap-icons.css';
// import * as bootstrap from "bootstrap";
// window.bootstrap = bootstrap;
import App from './App.vue'
import router from './router'
import BaseBlock from "./components/Block/BaseBlock.vue";
import BaseHeadering from './components/Block/BaseHeadering.vue'



const app = createApp(App)
// Register global components 全局註冊
app.component("BaseBlock", BaseBlock);
app.component("BaseHeadering", BaseHeadering);


app.use(createPinia())
app.use(router)

app.mount('#app')

