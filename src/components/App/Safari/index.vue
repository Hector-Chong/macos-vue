<template>
  <div class="h-full bg-main os-blur">
    <SafariHeader v-model:src="curUrl" />

    <iframe class="w-full h-full safari__content" :src="curUrl" frameborder="0"></iframe>
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue';
import SafariHeader from './header.vue';

export default defineComponent({
  components: { SafariHeader },
  setup() {
    const curUrl = ref('https://xmu.edu.cn');

    return {
      curUrl,
    };
  },
});
</script>

<style lang='scss' scoped>
$prefix: 'safari';

.#{$prefix} {
  &__content {
  }
}
</style>