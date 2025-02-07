import './styles/tailwind.css';
import './styles/index.less';
import { createApp } from 'vue';
import { setupNaiveDiscreteApi, setupNaive, setupDirectives } from '@/plugins';
import App from './App.vue';
import router, { setupRouter } from './router';
import { setupStore } from '@/store';

async function bootstrap() {
  const app = createApp(App);

  // Mount state management
  setupStore(app);

  // Register global commonly used naive-ui components
  setupNaive(app);

  // Mount naive-ui context-free Api
  setupNaiveDiscreteApi();

  // Register global custom components
  //setupCustomComponents();

  // Register global custom directives, e.g.: v-permission permission directive
  setupDirectives(app);

  // Register global methods, e.g.: app.config.globalProperties.$message = message
  //setupGlobalMethods(app);

  // Mount router
  setupRouter(app);

  // Mount APP instance after router is ready
  // https://router.vuejs.org/api/interfaces/router.html#isready
  await router.isReady();

  // https://www.naiveui.com/en-US/os-theme/docs/style-conflict#About-Tailwind's-Preflight-Style-Override
  const meta = document.createElement('meta');
  meta.name = 'naive-ui-style';
  document.head.appendChild(meta);

  app.mount('#app', true);
}

void bootstrap();
