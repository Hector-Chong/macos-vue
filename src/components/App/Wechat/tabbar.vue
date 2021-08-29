<template>
  <div class="flex flex-col justify-between wechat__tabbar os-blur">
    <div class="top">
      <img class="mb-6 rounded wechat__avatar" :src="require('@/assets/image/avatar.jpg')" />

      <img
        class="mb-3 wechat__tabbar__icon wechat__tabbar__icon--selected"
        :src="require('./image/TabBar_Chat_Selected.svg')"
      />

      <img class="wechat__tabbar__icon" :src="require('./image/TabBar_Contacts.svg')" />
      <img class="wechat__tabbar__icon" :src="require('./image/TabBar_Favorites.svg')" />
      <img class="wechat__tabbar__icon" :src="require('./image/Compose_Folder.svg')" />
    </div>

    <div class="bottom">
      <img class="wechat__tabbar__icon" :src="require('./image/TabBar_Setting.svg')" />
    </div>
  </div>
</template>

<script lang='ts'>
import { defineComponent } from "vue";

export default defineComponent({
})
</script>

<style lang="scss" scoped>
$prefix: 'wechat__tabbar';

.#{$prefix} {
  width: 3.75rem;
  padding: 1.8rem 0.625rem 1rem;
  background-color: $window-title-bar-dark;
  user-select: none;

  &__icon {
    width: 2rem;
    height: 2rem;
    margin: 0 auto 1.5rem;

    &--selected {
      fill: $os-green;
    }
  }
}
</style>