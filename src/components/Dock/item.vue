<template>
  <div
    :class="['dock-item',{'dock-item--loading':isLoading,active:app.active}]"
    @click="openApp(app)"
  >
    <img class="dock-item__icon" :src="app.icon" :style="iconStyle" />
  </div>
</template>

<script lang='ts'>
import { computed, defineComponent, toRef, PropType } from "vue";
import { openApp } from '@/logic/app/openApp'
import { useDockStore } from "@/store/modules/dock";
import { OsApplication } from "@/application";

export default defineComponent({
  emits: [],
  props: {
    app: {
      required: true,
      type: Object as PropType<OsApplication>
    },
    size: {
      required: true,
      default: 50
    }
  },
  setup(props) {
    const iconSize = toRef(props, "size");
    const dockStore = useDockStore()

    const iconStyle = computed(() => ({
      width: iconSize.value + "px",
      height: iconSize.value + "px",
      top: "calc((3.5rem * " + iconSize.value / 50 + " - 3.5rem) / 2 * -1)"
    }));

    const isLoading = computed(() => {
      const loadingApps = dockStore.getLoadingAppids
      return loadingApps.has(props.app.id)
    })

    return { iconStyle, openApp, isLoading };
  }
});
</script>

<style lang='scss' scoped>
$prefix: 'dock-item';

.#{$prefix} {
  display: flex;
  align-items: center;

  &--loading {
    animation: loading 0.55s ease-in-out;
    animation-iteration-count: infinite;
    animation-direction: alternate;
  }

  &:active {
    filter: brightness(65%);
  }

  &__icon {
    position: relative;
    width: 3.125rem;
    height: 3.125rem;
    transition: all 0.15s ease;
  }
}

@keyframes loading {
  from {
    transform: translateY(0);
  }

  to {
    transform: translateY(-30px);
  }
}
</style>