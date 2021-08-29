<template>
  <div class="relative h-full mx-2 text-center text-white menu-item">
    <slot></slot>
  </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({});
</script>

<style lang="scss" scoped>
.menu-item {
  border-radius: 0.2rem;
  line-height: 1.5625rem;
  text-shadow: 0 2px 3px rgba(0, 0, 0, 0.5);
  user-select: none;
}
</style>