import { onMounted } from 'vue';

export function useContextMenu() {
  onMounted(() => {
    document.addEventListener('contextmenu', (e) => {
      e.preventDefault();
    });
  });
}
