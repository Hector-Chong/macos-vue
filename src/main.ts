import '@/design/index.scss';
import '@/design/tailwind.css';

import { createApp } from 'vue';
import { setupRouter } from './router';
import App from './App.vue';
import { setupStore } from './store';
import initAppConfig from './logic/initApp';

async function bootstrap() {
  const app = createApp(App);

  setupRouter(app);

  setupStore(app);

  initAppConfig(app);

  app.mount('#app', true);
}

bootstrap();
