<template>
  <div class="w-screen h-screen desktop" :style="{backgroundImage:'url('+wallpaperSrc+')'}">
    <MenuBar />

    <WindowManager />

    <Dock />
  </div>
</template>

<script lang='ts'>
import { defineComponent, onMounted, ref, unref, Ref } from "vue";

import MenuBar from "@/components/MenuBar/index.vue";
import Dock from "@/components/Dock/index.vue";
import WindowManager from "@/components/WindowManager/index";

import { useDrag } from "@/hooks/desktop/useDrag";
import { useContextMenu } from "@/hooks/desktop/useContextMenu";

export default defineComponent({
  components: {
    MenuBar,
    Dock,
    WindowManager: WindowManager.getComponent()
  },
  setup() {
    const wallpaperSrc = require("@/assets/image/macos-big-sur-light.jpg");

    useDrag();
    useContextMenu();

    return {
      wallpaperSrc,
    };
  }
});
</script>

<style lang="scss" scoped>
$prefix: 'desktop';

.desktop {
  background-position: 50% 50%;
  background-repeat: no-repeat;
  background-size: cover;
  user-select: none;
  overflow: hidden;
}
</style>