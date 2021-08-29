import { getCurrentInstance, onBeforeUnmount, onMounted } from 'vue';
import '@/design/unit/drag.scss';

export function useDrag() {
  const instance = getCurrentInstance();
  let onDrag = false;
  let initX = 0;
  let initY = 0;
  let el: HTMLElement;
  let mouseMoveHandler: Function;
  let mouseDownHandler: Function;
  let mouseUpHandler: Function;
  const div = document.createElement('div');
  div.classList.add('desktop-drag-outline');

  onMounted(() => {
    if (instance) {
      el = instance.proxy?.$el as HTMLElement;

      el.addEventListener(
        'mousedown',
        (mouseDownHandler = (e: MouseEvent) => {
          if (e.target !== el) return;

          onDrag = true;

          initX = e.clientX;
          initY = e.clientY;
        })
      );

      el.addEventListener(
        'mouseup',
        (mouseUpHandler = () => {
          setDragVisible(div, (onDrag = false));

          resetDragOffset(div);
        })
      );

      el.addEventListener(
        'mousemove',
        (mouseMoveHandler = (e: MouseEvent) => {
          if (!onDrag) return;

          setDragVisible(div, true);

          setDragOffset(div, initX, e.clientX, initY, e.clientY);
        })
      );

      el.appendChild(div);
    }
  });

  onBeforeUnmount(() => {
    el.removeEventListener('mouseup', (mouseUpHandler as unknown) as EventListenerObject);
    el.removeEventListener('mousemove', (mouseMoveHandler as unknown) as EventListenerObject);
    el.removeEventListener('mousedown', (mouseDownHandler as unknown) as EventListenerObject);

    el.removeChild(div);
  });
}

function setDragOffset(el: HTMLElement, x1: number, x2: number, y1: number, y2: number) {
  el.style.width = Math.abs(Math.floor(x2 - x1)) + 'px';
  el.style.height = Math.abs(Math.floor(y2 - y1)) + 'px';
  el.style.left = (x1 < x2 ? x1 : x2) + 'px';
  el.style.top = (y1 < y2 ? y1 : y2) + 'px';
}

function resetDragOffset(el: HTMLElement) {
  el.style.width = '0';
  el.style.height = '0';
  el.style.left = '0';
  el.style.top = '0';
}

function setDragVisible(el: HTMLElement, visible: boolean) {
  el.style.visibility = visible ? 'visible' : 'hidden';
}
