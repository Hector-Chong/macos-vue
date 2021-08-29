import { store } from '@/store';
import { defineStore } from 'pinia';

export interface DockState {
  visible: boolean;
  loadingAppIds: Set<string>;
}

export const useDockStore = defineStore({
  id: 'dock',
  state: (): DockState => ({
    visible: true,
    loadingAppIds: new Set(),
  }),
  getters: {
    getVisible(): boolean {
      return this.visible;
    },
    getLoadingAppids(): Set<string> {
      return this.loadingAppIds;
    },
  },
  actions: {
    setVisible(visible: boolean) {
      this.visible = visible;
    },
    addLoadingApp(id: string) {
      this.loadingAppIds.add(id);
    },
    removeLoadingApp(id: string) {
      this.loadingAppIds.delete(id);
    },
    clearLoadingApps() {
      this.loadingAppIds.clear();
    },
  },
});

export function useAppStoreWithOut() {
  return useDockStore(store);
}
