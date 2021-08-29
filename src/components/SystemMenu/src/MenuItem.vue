<template>
  <div class="menu-item">
    <slot></slot>
  </div>
</template>

<script lang='ts'>
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    divided: {
      type: Boolean,
    },
  },
});
</script>

<style lang='scss' scoped>
.menu-item {
  padding-left: 0.375rem;
  padding-right: 0.375rem;
  font-size: 0.8125rem;
  height: 1.375rem;
  line-height: 1.375rem;
  border-radius: 0.2rem;

  &:hover {
    color: #fff;
    background-color: #007aff;
  }
}
</style>