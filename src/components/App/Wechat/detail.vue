<template>
  <div class="flex flex-col justify-between flex-1 wechat__detail">
    <div class="px-6 text-lg text-white wechat__detail__header">测试用户</div>

    <div class="flex-1 px-4 py-5 wechat__detail__content">
      <div class="flex content__item content__item--left">
        <img
          class="rounded wechat__avatar content__item__avatar"
          :src="require('@/assets/image/avatar.jpg')"
        />

        <div
          class="relative px-3 py-2 rounded content__item__message"
        >测试信息测试信息测试信息测试信息测试信息测试信息测试信息测试信息fdjsalifjalfalfjl</div>
      </div>

      <div class="flex content__item content__item--right">
        <img
          class="rounded wechat__avatar content__item__avatar"
          :src="require('@/assets/image/avatar.jpg')"
        />

        <div
          class="relative px-3 py-2 rounded content__item__message"
        >测试信息测试信息测试信息测试信息测试信息测试信息测试信息测试信息fdjsalifjalfalfjl</div>
      </div>
    </div>

    <div class="px-4 py-3 wechat__detail__action">
      <div class="wechat__detail__action__bar row-between">
        <div class="flex left">
          <img
            class="mr-3 wechat__detail__action__bar__button"
            :src="require('./image/Emotion_Sticker.svg')"
          />

          <img
            class="mr-3 wechat__detail__action__bar__button"
            :src="require('./image/Compose_Folder.svg')"
          />

          <img
            class="mr-3 wechat__detail__action__bar__button"
            :src="require('./image/Compose_Capture.svg')"
          />

          <img
            class="wechat__detail__action__bar__button"
            :src="require('./image/Compose_History.svg')"
          />
        </div>

        <div class="flex right">
          <img
            class="mr-3 wechat__detail__action__bar__button"
            :src="require('./image/Compose_Voice.svg')"
          />

          <img
            class="wechat__detail__action__bar__button"
            :src="require('./image/Compose_Video.svg')"
          />
        </div>
      </div>

      <textarea class="text-white wechat__detail__action__input"></textarea>
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

$prefixX: 'wechat__detail';

.#{$prefixX} {
  $wechat-green: rgb(39, 171, 78);

  background-color: #1e1e19;

  &__action {
    height: 10.625rem;
    border-top: 1px solid rgb(43, 43, 43);

    &__input {
      width: 100%;
      height: 6.2rem;
      outline: none;
      margin-top: 1rem;
      background-color: transparent;
      resize: none;
    }
  }

  &__header {
    height: 3.125rem;
    line-height: 3.125rem;
    border-bottom: 1px solid rgb(43, 43, 43);
  }

  &__content {
    $content-item: 'content__item';

    .#{$content-item} {
      max-width: 65%;

      & + .#{$content-item} {
        margin-top: 1.3rem;
      }

      &__avatar {
        margin-right: 0.625rem;
      }

      &__message {
        color: #fff;
        background-color: rgb(44, 44, 44);
        user-select: text;

        &::after {
          content: ' ';
          position: absolute;
          left: -10px;
          top: 1.2rem;
          z-index: 1;
          display: block;
          width: 0;
          height: 0;
          border-width: 5px;
          border-color: transparent;
          border-right: 5px solid rgb(44, 44, 44);
        }
      }

      &--right {
        float: right;

        .#{$content-item} {
          &__avatar {
            order: 1;
            margin-left: 0.625rem;
            margin-right: 0;
          }

          &__message {
            order: 0;
            color: #000;
            background-color: $wechat-green;

            &::after {
              left: auto;
              right: -10px;
              border-right-color: transparent;
              border-left: 5px solid $wechat-green;
            }
          }
        }
      }
    }
  }

  &__avatar {
    width: 2.5rem;
    height: 2.5rem;
  }
}
</style>