import { OsApplication } from '@/application';
import WindowManager from '@/components/WindowManager';
import { store } from '@/store';
import { defineStore } from 'pinia';

export interface ApplicationState {
  applications: OsApplication[];
  windowManager: WindowManager;
}

export const useAppStore = defineStore({
  id: 'app',
  state: (): ApplicationState => ({
    applications: [],
    windowManager: new WindowManager(),
  }),
  actions: {
    registerApps(apps: OsApplication[]) {
      apps.forEach((app) => this.applications.push(app));
    },
  },
  getters: {
    getWindowManager(): WindowManager {
      return this.windowManager as WindowManager;
    },
    getApplications(): OsApplication[] {
      return this.applications;
    },
  },
});

export function useAppStoreWithOut() {
  return useAppStore(store);
}
