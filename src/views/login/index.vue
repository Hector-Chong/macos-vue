<template>
  <div class="w-screen h-screen text-center os-login">
    <div class="os-login__bg"></div>

    <div class="os-login__container">
      <img
        class="mx-auto mb-8 rounded-full os-login__container__avatar"
        :src="require('@/assets/image/avatar.jpg')"
        alt="avatar"
      />

      <div class="text-white">
        <div class="mb-4 text-2xl font-bold os-login__container__nickname">Héctor Chong</div>

        <div class="pl-4 mb-3 rounded-full row-between pl os-login__container__password">
          <input
            v-model="passwordRef"
            type="password"
            class="text-xl font-bold os-login__container__password__input"
            placeholder="输入密码"
            ref="passwordInput"
            @keydown="onPasswordConfirm"
          />

          <img
            v-show="passwordRef.length"
            class="os-login__container__password__arrow"
            :src="require('@/assets/image/apple/arrow.forward.circle.svg')"
            alt
          />
        </div>

        <div class="text-sm font-bold">Press Enter to Login</div>
      </div>
    </div>

    <div class="flex justify-center text-white ju os-login__footer">
      <div class="os-login__footer__item">
        <div class="mx-auto mb-2 rounded-full os-login__footer__item__icon">
          <SystemIcon name="restart.circle" :size="32" />
        </div>

        <div class="text-xs os-login__footer__item__title">重新启动</div>
      </div>
    </div>
  </div>
</template>

<script>
import { router } from '@/router';
import { defineComponent, onUnmounted, ref } from 'vue';
import SystemIcon from '@/components/SystemIcon/icon.vue';

export default defineComponent({
  components: { SystemIcon },
  setup() {
    const passwordRef = ref('');
    const passwordInput = ref(null);

    const inputCb = () => {
      passwordInput.value.focus();
    };

    window.addEventListener('keydown', inputCb);

    onUnmounted(() => window.removeEventListener('keydown', inputCb));

    const onPasswordConfirm = ({ keyCode }) => {
      if (keyCode === 13) router.replace('desktop');
    };

    return {
      passwordRef,
      passwordInput,
      onPasswordConfirm,
    };
  },
});
</script>

<style lang="scss" scoped>
$prefix: 'os-login';

.#{$prefix} {
  pointer-events: none;

  &__bg {
    position: fixed;
    left: 0;
    top: 0;
    z-index: -1;
    width: 100%;
    height: 100%;
    background-position: 50% 50%;
    background-image: url('~@/assets/image/macos-big-sur-light.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    filter: brightness(70%);
  }

  &__container {
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -90%);

    &__avatar {
      display: block;
      width: 10rem;
      height: 10rem;
    }

    &__nickname {
      font-family: 'PingFang SC', 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif;
    }

    &__password {
      width: 12rem;
      height: 2.2rem;
      padding-right: 0.4rem;
      pointer-events: auto;
      background-color: rgba(255, 255, 255, 0.2);
      backdrop-filter: blur(10px);

      &__input {
        width: 80%;
        height: 100%;
        outline: none;
        background: transparent;

        &::placeholder {
          position: relative;
          color: rgba(255, 255, 255, 0.4);
          top: -0.1rem;
          font-size: 0.85rem;
          vertical-align: 20px;
        }
      }

      &__arrow {
        width: 1.6rem;
        height: 1.6rem;
      }
    }
  }

  &__footer {
    position: fixed;
    width: 100%;
    bottom: 3rem;

    &__item {
      &__icon {
        width: 2.8rem;
        height: 2.8rem;
        padding-top: 0.45rem;
        background-color: rgba(255, 255, 255, 0.2);
        backdrop-filter: blur(10px);

        img {
          width: 1.9rem;
          height: 1.9rem;
        }
      }
    }
  }
}
</style>