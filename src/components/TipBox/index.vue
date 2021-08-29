<template>
  <div @click="onBoxClick" class="h-full px-2 tip-box" :class="{'is-active':isActive}">
    <slot name="content"></slot>

    <div class="tip-box__tip" v-show="isActive" :style="tipStyle">
      <slot name="tip"></slot>
    </div>
  </div>
</template>

<script lang='ts'>
import { toRem } from "@/utils/design";
import { computed, defineComponent, ref } from "vue";

export default defineComponent({
  props: {
    top: {
      type: Number,
      default: 0
    },
    left: {
      type: Number,
      default: 0
    },
  },
  setup(props) {
    const isActive = ref(false)

    const onBoxClick = () => isActive.value = !isActive.value

    const tipStyle = computed(() => {
      return {
        left: toRem(props.left, true),
        top: 'calc(100% + ' + toRem(props.top, true) + ')'
      }
    })

    return {
      isActive,
      onBoxClick,
      tipStyle
    }
  }
});
</script>

<style lang='scss' scoped>
$prefix: 'tip-box';

.#{$prefix} {
  position: relative;
  user-select: none;

  &.is-active {
    background-color: rgba(0, 0, 0, 0.25);
  }

  &__tip {
    position: absolute;
    top: 100%;
    z-index: 5;
    line-height: 1;
  }
}
</style>