<template>
  <div
    :class="['os-window',{'os-window--transition':transition}]"
    :style="windowStyle"
    @click="onWindowClick"
  >
    <WindowHeader :title="title" :window="window" />

    <div class="h-full os-window__content">
      <slot></slot>
    </div>

    <template v-if="slots">
      <div class="os-window__drag os-window__drag--lt"></div>
      <div class="os-window__drag os-window__drag--rt"></div>
      <div class="os-window__drag os-window__drag--rb"></div>
      <div class="os-window__drag os-window__drag--lb"></div>
    </template>
  </div>
</template>

<script lang='ts'>
import { defineComponent, getCurrentInstance, PropType, provide } from "vue";
import { getWindowStyle, useWindowResize } from './useWindow'
import WindowApi from "../../core/WindowApi";
import WindowHeader from './header.vue'
import { WindowItem } from "../../types";
import { useWindowManager } from "@/hooks/desktop/useWindowManager";

const WindowProps = {
  x: {
    type: Number,
    default: 0,
  },
  y: {
    type: Number,
    default: 0,
  },
  width: {
    type: Number,
    default: 0,
  },
  height: {
    type: Number,
    default: 0,
  },
  zIndex: {
    type: Number,
    default: 5
  },
  title: {
    type: String
  },
  transition: {
    type: Boolean,
    default: false
  },
  window: {
    required: true,
    type: Object as PropType<WindowItem>
  },
};

export default defineComponent({
  name: 'OsWindow',
  components: { WindowHeader },
  props: WindowProps,
  setup(props) {
    const instance = getCurrentInstance()
    const windowStyle = getWindowStyle()
    const windowApi = new WindowApi(props.window as WindowItem, useWindowManager())

    provide('window', windowApi)

    useWindowResize(windowApi)

    const onWindowClick = () => windowApi.addZindex()

    return {
      slots: instance?.slots,
      windowStyle,
      onWindowClick,
      windowApi
    }
  }
})
</script>

<style lang="scss" scoped>
$prefix: 'os-window';

.#{$prefix} {
  position: absolute;
  border-radius: 0.4rem;
  box-shadow: 0 4px 12px rgb(0 0 0 / 30%);
  z-index: 5;
  overflow: hidden;

  &--transition {
    transition: all 0.35s cubic-bezier(0.51, -0.01, 0.01, 0.93);
  }

  &__drag {
    position: absolute;
    width: 0.65rem;
    height: 0.65rem;

    &--lt {
      left: 0;
      top: 0;
      cursor: nwse-resize;
    }

    &--rt {
      right: 0;
      top: 0;
      cursor: nesw-resize;
    }

    &--rb {
      right: 0;
      bottom: 0;
      cursor: nwse-resize;
    }

    &--lb {
      left: 0;
      bottom: 0;
      cursor: nesw-resize;
    }
  }
}
</style>