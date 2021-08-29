<template>
  <div @click="onMenuClick" class="sub-menu" :class="{'is-active':isActive}">
    <slot></slot>

    <SystemMenu v-show="isActive" :options="options" class="p-1" />
  </div>
</template>

<script lang='ts'>
import { defineComponent, PropType, ref } from "vue";
import {
  SystemMenu,
} from "@/components/SystemMenu";
import type { MenuItemProp } from "../SystemMenu/src/types";

export default defineComponent({
  components: { SystemMenu },
  props: {
    options: {
      type: Array as PropType<MenuItemProp[]>
    }
  },
  setup() {
    const isActive = ref(false);

    const onMenuClick = () => {
      isActive.value = !isActive.value;
    };

    return {
      isActive,
      onMenuClick,
    };
  }
});
</script>

<style lang='scss' scoped>
$prefix: 'sub-menu';

.#{$prefix} {
  position: relative;
  user-select: none;

  &.is-active {
    background-color: rgba(0, 0, 0, 0.25);
  }
}
</style>