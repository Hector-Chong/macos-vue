<template>
  <router-view>
    <template v-slot="{ Component, route }">
      <component :is="Component" :key="route.fullPath" />
    </template>
  </router-view>
</template>

<script>
export default {
  name: "App"
};
</script>

<style lang="scss">
</style>
