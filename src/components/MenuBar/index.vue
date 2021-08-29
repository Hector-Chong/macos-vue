<template>
  <div class="text-base menu-bar os-blur">
    <div class="w-screen pl-2 pr-5 row-between menu-bar__wrapper">
      <div class="flex items-center h-full left">
        <AppleLogo />
      </div>

      <div class="flex items-center h-full right">
        <Control />
        <Datetime />
      </div>
    </div>
  </div>
</template>

<script lang='ts'>
import { defineComponent } from "vue";
import AppleLogo from "./AppleLogo/index.vue";
import Datetime from "./Datetime/index.vue";
import Control from "./Control/index.vue";

export default defineComponent({
  components: { AppleLogo, Datetime, Control },
  setup() { }
});
</script>

<style lang='scss' scoped>
$prefix: 'menu-bar';

.#{$prefix} {
  position: relative;
  height: 1.5625rem;
  z-index: 10;

  &__wrapper {
    position: fixed;
    top: 0;
    left: 0;
    height: 1.5625rem;
    z-index: 10;
    background-color: rgba(0, 0, 0, 0.45);
  }
}
</style>