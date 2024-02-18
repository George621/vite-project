import { createApp } from 'vue'
import './style.css'
import App from './App.vue';
import router from './router/index.js';
import 'ant-design-vue/dist/reset.css';
import Antd from "ant-design-vue";
// import VueI18n from 'vue-i18n';
const app = createApp(App);
// app.use(VueI18n);
app.use(Antd);
app.use(router);
app.mount('#app');