import { OsApplication } from '@/application';
import WindowManager from '@/components/WindowManager';
import { useWindowManager } from '@/hooks/desktop/useWindowManager';
import { useDockStore } from '@/store/modules/dock';

export const openApp = async (app: OsApplication, manager: WindowManager) => {
  const dockStore = useDockStore();

  dockStore.addLoadingApp(app.id);

  app.loadedComponent = (await app.component()) as NodeModule;

  if (app.loadedComponent.default) app.loadedComponent = app.loadedComponent.default;

  dockStore.removeLoadingApp(app.id);

  const windowManager = useWindowManager();

  windowManager.addWindow(app);
};
