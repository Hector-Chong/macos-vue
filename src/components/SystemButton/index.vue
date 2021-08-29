<template>
  <div :class="['p-1 rounded system-button',{'system-button--no-hover':noHover}]">
    <SystemIcon v-if="icon" :name="icon" :size="iconSize" />

    <slot></slot>
  </div>
</template>

<script lang='ts'>
import { defineComponent, PropType } from "vue";
import { SystemIconName } from "../SystemIcon/types";
import SystemIcon from '@/components/SystemIcon'

export default defineComponent({
  components: { SystemIcon },
  props: {
    icon: {
      type: String as PropType<SystemIconName>
    },
    iconSize: {
      type: Number,
      default: 13
    },
    noHover: {
      type: Boolean,
      default: false
    }
  }
})
</script>

<style lang="scss" scoped>
$prefix: 'system-button';

.#{$prefix} {
  &--no-hover {
    &:hover {
      background-color: transparent !important;
    }
  }

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
}
</style>