import { App } from 'vue';
import builtinApps from '@/setting/builtinApps';
import { useAppStore } from '@/store/modules/app';

export default function initAppConfig(app: App) {
  const appStore = useAppStore();

  appStore.registerApps(builtinApps);
}
