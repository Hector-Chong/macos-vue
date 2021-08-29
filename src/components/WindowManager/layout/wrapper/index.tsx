import { toRem } from '@/utils/design';
import {
  computed,
  CSSProperties,
  defineComponent,
  getCurrentInstance,
  h,
  toRefs,
  unref,
} from 'vue';

export default defineComponent({
  name: 'WindowWrapper',
  props: {
    offsetTop: {
      type: [String, Number],
      default: 0,
    },
    offsetLeft: {
      type: [String, Number],
      default: 0,
    },
    width: {
      type: [String, Number],
      default: '100%',
    },
    height: {
      type: [String, Number],
      default: '100%',
    },
  },
  setup(props) {
    const instance = getCurrentInstance();
    const propsRef = toRefs(props);

    const wrapperStyle = computed(
      (): CSSProperties => ({
        top: toRem(propsRef.offsetTop.value, true),
        left: toRem(propsRef.offsetLeft.value, true),
        width: toRem(propsRef.width.value, true),
        height: toRem(propsRef.height.value, true),
        zIndex: 0,
      })
    );

    return () =>
      h(
        'div',
        { class: 'relative window-wrapper', style: unref(wrapperStyle) },
        { default: instance?.slots.default }
      );
  },
});
