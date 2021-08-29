import { Resizable } from '@/application';
import { toRem } from '@/utils/design';
import {
  computed,
  ComputedRef,
  CSSProperties,
  getCurrentInstance,
  onMounted,
  onUnmounted,
} from 'vue';
import { DEFAULT_HEIGHT, DEFAULT_WIDTH, DEFAULT_WINDOW_STYLE } from '../../core/var';
import WindowApi from '../../core/WindowApi';

export interface WindowPropsInterface extends Resizable {
  x: number;
  y: number;
  width: number;
  height: number;
  title: string;
  window: WindowApi;
  zIndex: number;
}

export function getWindowStyle(): ComputedRef<CSSProperties> {
  const instance = getCurrentInstance();
  const props = (instance?.props as unknown) as WindowPropsInterface;

  return computed(() => {
    const options: CSSProperties = { ...DEFAULT_WINDOW_STYLE };

    if (instance && props) {
      options.left = toRem(props.x, true);
      options.top = toRem(props.y, true);
      options.width = toRem(props.width === 0 ? DEFAULT_WIDTH : props.width, true);
      options.height = toRem(props.height === 0 ? DEFAULT_HEIGHT : props.height, true);
      options.zIndex = props.zIndex;
    }

    return options;
  });
}

type ElemEventListener = (this: HTMLElement, ev: MouseEvent) => any;
type DragHandler = { register: Function; remove: Function };
type DragHandlerRegisterCallback = (x: number, y: number) => any;
enum DragDirections {
  lt,
  rt,
  rb,
  lb,
}

type DragDirectionHandlers = {
  [P in keyof typeof DragDirections]: DragHandlerRegisterCallback;
};

const createDragDirectionResolver = (
  windowApi: WindowApi,
  cb: (x: number, y: number) => void
): DragHandlerRegisterCallback => {
  return function(x: number, y: number) {
    windowApi.setTransition(false);

    requestAnimationFrame(() => cb(x, y));

    requestAnimationFrame(() => windowApi.setTransition(true));
  };
};

const createDragDirections = (windowApi: WindowApi): DragDirectionHandlers => ({
  lt: createDragDirectionResolver(windowApi, (x, y) => {
    windowApi.setSizeTo(-x, -y) && windowApi.setPositionTo(x, y);
  }),
  rt: createDragDirectionResolver(
    windowApi,
    (x, y) => windowApi.setSizeTo(x, -y) && windowApi.setPositionYTo(y)
  ),
  rb: createDragDirectionResolver(windowApi, (x, y) => windowApi.setSizeTo(x, y)),
  lb: createDragDirectionResolver(
    windowApi,
    (x, y) => windowApi.setSizeTo(-x, y) && windowApi.setPositionXTo(x)
  ),
});

export function useWindowResize(windowApi: WindowApi) {
  const handlersPerDirection: Record<string, DragHandler> = {};

  onMounted(() => {
    const instance = getCurrentInstance();
    const $el = instance?.proxy?.$el as HTMLElement;
    const dragDirections = createDragDirections(windowApi);

    for (const direction in dragDirections) {
      const dragger = $el.querySelector('.os-window__drag--' + direction) as HTMLElement;

      if (!dragger) continue;

      const handler = createDragHandler(dragger);

      handler.register(dragDirections[direction]);

      handlersPerDirection[direction] = handler;
    }
  });

  onUnmounted(() => {
    Object.values(handlersPerDirection).map((handler) => {
      handler.remove();
    });
  });
}

function createDragHandler(dragger: HTMLElement): DragHandler {
  let onDrag = false;
  let lastClientX = 0;
  let lastClientY = 0;
  let mousedownFn: ElemEventListener;
  let mousemoveFn: ElemEventListener;
  let mouseupFn: ElemEventListener;

  const register = (cb: DragHandlerRegisterCallback) => {
    dragger.addEventListener(
      'mousedown',
      (mousedownFn = (e) => {
        e.preventDefault();
        if (e.target !== dragger) return;
        onDrag = true;

        document.body.addEventListener(
          'mousemove',
          (mousemoveFn = (e) =>
            requestAnimationFrame(() => {
              {
                if (!onDrag) return;

                if (lastClientX === 0) {
                  lastClientX = e.clientX;
                  lastClientY = e.clientY;
                  return;
                }

                cb(e.clientX - lastClientX, e.clientY - lastClientY);

                lastClientX = e.clientX;
                lastClientY = e.clientY;
              }
            }))
        );

        document.body.addEventListener(
          'mouseup',
          (mouseupFn = () => {
            onDrag = false;
            lastClientY = lastClientX = 0;

            remove();
          })
        );
      })
    );
  };

  const remove = () => {
    document.body.removeEventListener('mousedown', mousedownFn);
    document.body.removeEventListener('mousemove', mousemoveFn);
    document.body.removeEventListener('mouseup', mouseupFn);
  };

  return {
    register,
    remove,
  };
}
