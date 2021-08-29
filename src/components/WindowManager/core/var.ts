import { toRem } from '@/utils/design';
import { CSSProperties } from 'vue';

export const DEFAULT_WIDTH = 720;
export const DEFAULT_HEIGHT = 500;

export const MIN_WIDTH = 315;
export const MIN_HEIGHT = 250;

export const DEFAULT_WINDOW_STYLE: CSSProperties = {
  left: 0,
  top: 0,
  width: toRem(DEFAULT_WIDTH, true),
  height: toRem(DEFAULT_HEIGHT, true),
  minWidth: toRem(MIN_WIDTH, true),
  minHeight: toRem(MIN_HEIGHT, true),
  zIndex: 0,
};
