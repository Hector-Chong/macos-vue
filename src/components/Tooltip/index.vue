<template>
  <div class="relative tooltip-wrapper">
    <slot></slot>

    <div class="px-2 text-xs text-center text-white tooltip" :style="tooltipStyle">{{content}}</div>
  </div>
</template>

<script lang="ts">
import { toRem } from "@/utils/design"
import { computed, defineComponent, toRefs } from "vue"

export default defineComponent({
  props: {
    offsetTop: {
      type: Number,
      default: -30
    },
    content: {
      required: true,
      type: String
    }
  },
  setup(props) {
    const propsRef = toRefs(props)

    const tooltipStyle = computed(() => {
      return {
        top: toRem(propsRef.offsetTop.value)
      }
    })

    return {
      tooltipStyle
    }
  }
})
</script>


<style lang="scss" scoped>
$prefix: 'tooltip';

.tooltip-wrapper:hover {
  .#{$prefix} {
    visibility: visible;
  }
}

.#{$prefix} {
  position: absolute;
  top: -40px;
  left: 50%;
  transform: translateX(-50%);
  background-color: $window-title-bar-dark;
  border-radius: 4px;
  border: 1px solid rgb(46, 46, 46);
  word-break: keep-all;
  white-space: nowrap;
  visibility: hidden;

  &::after {
    content: ' ';
    position: absolute;
    left: calc(50% - 2px);
    bottom: -8px;
    width: 0;
    height: 0;
    border: 4px solid transparent;
    border-top-color: $window-title-bar-dark;
  }
}
</style>