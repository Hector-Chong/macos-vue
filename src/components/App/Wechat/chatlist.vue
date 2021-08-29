<template>
  <div class="relative wechat__chatlist">
    <div class="row-between wechat__chatlist__header">
      <div class="flex-1 text-sm wechat__chatlist__header__search">
        <input class="w-full px-2 text-white" type="text" placeholder="搜索内容" />
      </div>

      <img class="ml-3 wechat__chatlist__header__icon" :src="require('./image/icons_chatadd.svg')" />
    </div>

    <div class="flex mb-1 wechat__chatlist__item" v-for="i in 8" :key="i">
      <div class="relative item__avatar">
        <img class="rounded" :src="require('@/assets/image/avatar.jpg')" />
        <div class="item__avatar__dot">2</div>
      </div>

      <div class="flex-1">
        <div class="row-between">
          <div class="text-white item__nickname">测试用户</div>
          <div class="text-xs text-gray-500 item__time">13:00</div>
        </div>

        <div class="text-sm text-gray-400 item__brief">测试文本测试文本测试文本测试文本</div>
      </div>
    </div>
  </div>
</template>

<script lang='ts'>
import { defineComponent } from "vue";

export default defineComponent({
})
</script>

<style lang="scss" scoped>
@import './style/index';

$prefixX: 'wechat__chatlist';

.#{$prefixX} {
  $wechat-green: rgb(39, 171, 78);

  width: 28%;
  height: 100%;
  background-color: rgb(40, 40, 40);
  overflow-y: scroll;

  &__item {
    height: 4rem;
    padding: 0.75rem 1rem;

    .item {
      &__avatar {
        position: relative;
        width: 2.5rem;
        height: 2.5rem;
        flex-shrink: 0;
        margin-right: 0.5rem;

        &__dot {
          position: absolute;
          left: -0.25rem;
          top: -0.25rem;
          width: 0.938rem;
          height: 0.938rem;
          font-size: 0.5rem;
          line-height: 0.938rem;
          text-align: center;
          color: #fff;
          background: $os-red;
          border-radius: 50%;
        }
      }

      &__brief {
        display: -webkit-box;
        margin-top: 0.2rem;
        overflow: hidden;
        text-overflow: ellipsis;
        word-wrap: break-word;
        white-space: normal !important;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
      }
    }
  }

  &__header {
    height: 3.125rem;
    padding: 0.938rem 0.938rem 0.6rem;

    &__icon {
      width: 1.563rem;
      height: 1.563rem;
    }

    &__search {
      input {
        outline: none;
        height: 1.563rem;
        background-color: rgb(50, 50, 50);
        border-radius: 2px;
      }
    }
  }
}
</style>