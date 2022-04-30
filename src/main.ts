import router from '@/router/router';
import { createApp } from 'vue';
import App from './App.vue';

const app = createApp(App);

// 路由
app.use(router);

app.mount('#app');
