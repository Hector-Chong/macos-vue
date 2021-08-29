import WindowManager from '@/components/WindowManager';
import { useAppStore } from '@/store/modules/app';

export const useWindowManager = (): WindowManager => {
  const appStore = useAppStore();

  return appStore.getWindowManager;
};
