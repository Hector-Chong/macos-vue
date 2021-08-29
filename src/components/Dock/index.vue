<template>
  <div :class="['flex justify-center dock',{'dock--hide':!dockStore.visible}]">
    <div
      @mouseover="onDockMouseOver"
      @mouseout="onDockMouseOut"
      ref="dockRef"
      class="flex items-center justify-center px-2 dock__wrapper os-blur"
    >
      <Tooltip
        v-for="(app,index) in applicationStore.getApplications"
        :key="app.id"
        :content="app.title"
      >
        <DockItem :app="app" :size="dockItemSize[index]" />
      </Tooltip>
    </div>
  </div>
</template>

<script lang='ts'>
import { defineComponent, onMounted, reactive, ref } from "vue";
import DockItem from "./item.vue";
import Tooltip from "@/components/Tooltip/index.vue";
import { useAppStore } from "@/store/modules/app";
import { useDockStore } from "@/store/modules/dock";

export default defineComponent({
  components: { DockItem, Tooltip },
  setup() {
    const defaultIconSize = 50;
    let dockOffsetLeft = ref(0);
    let dockRef = ref(null);
    const originalItemX = ref<number[]>([]);

    const dockStore = useDockStore()
    const applicationStore = useAppStore()

    const dockItemSize = reactive<number[]>(
      new Array(applicationStore.getApplications.length).fill(defaultIconSize)
    );

    const onDockMouseOver = (e: MouseEvent) => {
      let clientX = e.clientX;

      for (let i = 0; i < dockItemSize.length; i++) {
        const a = clientX - (i * 50 + dockOffsetLeft.value);
        const b = 50;
        let iScale = 1 - Math.sqrt(a * a + b * b) / 300;

        if (iScale < 0.5) {
          iScale = 0.5;
        }

        dockItemSize[i] = 100 * iScale;
      }
    };

    const onDockMouseOut = () => dockItemSize.fill(defaultIconSize);

    onMounted(() => {
      dockOffsetLeft.value =
        ((dockRef.value as unknown) as HTMLElement).offsetLeft + 8;

      for (let i = 0; i < dockItemSize.length; i++) {
        originalItemX.value.push(50 * i);
      }
    });

    return {
      onDockMouseOver,
      onDockMouseOut,
      originalItemX,
      dockRef,
      dockItemSize,
      dockStore,
      applicationStore
    };
  }
});
</script>

<style lang='scss' scoped>
$prefix: 'dock';

.#{$prefix} {
  position: fixed;
  bottom: 0.4rem;
  width: 100%;
  z-index: 999;
  user-select: none;
  transition: transform 0.45s ease-in-out;

  &__wrapper {
    height: 4.0625rem;
    background-color: rgba(0, 0, 0, 0.35);
    border-radius: 1.25rem;
  }

  &--hide {
    transform: translateY(100px);
  }
}
</style>