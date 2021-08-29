<template>
  <MenuItem>
    <TipBox :left="-140">
      <template #content>
        <SystemIcon name="switch" :size="13" />
      </template>

      <template #tip>
        <ControlPanel />
      </template>
    </TipBox>
  </MenuItem>
</template>

<script lang='ts'>
import { defineComponent } from 'vue';
import MenuItem from '../MenuItem.vue';
import SystemIcon from '@/components/SystemIcon';
import TipBox from "@/components/TipBox/index.vue";
import ControlPanel from "./panel.vue";

export default defineComponent({
  components: { MenuItem, SystemIcon, TipBox, ControlPanel },
  setup() {
  }
});
</script>

<style lang="scss" scoped>
</style>