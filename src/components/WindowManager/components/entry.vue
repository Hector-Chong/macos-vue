<template>
  <WindowWrapper>
    <WindowLayout
      v-for="window in windows"
      :key="window.uid"
      :x="window.x"
      :y="window.y"
      :width="window.width"
      :height="window.height"
      :z-index="window.zIndex"
      :minWidth="window.minWidth"
      :minHeight="window.minHeight"
      :maxWidth="window.maxWidth"
      :maxHeight="window.maxHeight"
      :title="window.app.title"
      :zIndex="window.zIndex"
      :transition="window.transition"
      :window="window"
    >
      <component :is="window.app.loadedComponent" />
    </WindowLayout>
  </WindowWrapper>
</template>

<script>
import { defineComponent } from 'vue';

import WindowWrapper from '../layout/wrapper';
import WindowLayout from '../layout/window';
import { useWindowManager } from '@/hooks/desktop/useWindowManager';
import builtinApps from '@/setting/builtinApps';

export default defineComponent({
  components: { WindowWrapper, WindowLayout },
  setup() {
    const manager = useWindowManager();

    return {
      windows: manager.getWindows(),
      manager,
    };
  },
});
</script>