import WindowApi from '@/components/WindowManager/core/WindowApi';
import { WindowItem } from '@/components/WindowManager/types';
import { inject } from 'vue';

export function useWindow() {
  const injectedWindow = inject('window') as WindowItem;

  const windowApi = new WindowApi(injectedWindow);

  return windowApi;
}
