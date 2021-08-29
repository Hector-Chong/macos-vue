import { remToPx, toRem } from '@/utils/design';
import { CSSProperties, getCurrentInstance, onMounted, reactive } from 'vue';

const defaultProperties: CSSProperties = {
  left: 0,
  width: '14rem',
};

export const getMenuStyle = (): CSSProperties => {
  const options: CSSProperties = { ...defaultProperties };

  onMounted(() => {
    const instance = getCurrentInstance();
    const props = instance?.props;

    if (instance) {
      const width = (props?.width || options.width) as number;
      const parentEle: HTMLElement = instance.parent?.proxy?.$el;
      const info = parentEle.getBoundingClientRect();
      const rightBoundary = Math.floor(info.left) + (remToPx(toRem(width)) as number);
      const layoutViewWidth = document.documentElement.clientWidth;

      if (rightBoundary > layoutViewWidth) {
        options.left = toRem(layoutViewWidth - rightBoundary - 12 * 0.0625, true);
      }
    }
  });

  return options;
};
