<template>
  <div class="bg-black bootstrap">
    <div class="text-center loading-container">
      <img
        class="mx-auto apple-logo"
        :src="require('@/assets/image/apple-logo-white.png')"
        alt="Apple"
      />

      <div class="progress-bar">
        <div class="bg-white progress-bar__value"></div>
      </div>
    </div>
  </div>
</template>

<script>
import { router } from "@/router";
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    setTimeout(() => {
      router.replace("login");
    }, 4000);
  }
});
</script>

<style lang="scss" scoped>
.bootstrap {
  width: 100vw;
  height: 100vh;
  pointer-events: none;
}

.loading-container {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}

.apple-logo {
  display: block;
  width: 80px;
  margin-bottom: 6rem;
}

.progress-bar {
  position: relative;
  width: 220px;
  height: 6px;
  background-color: rgb(35, 35, 35);
  border-radius: 999px;

  .progress-bar__value {
    width: 0%;
    height: 100%;
    border-radius: inherit;
    animation: loading 3.5s ease;
    animation-iteration-count: 1;
    animation-fill-mode: forwards;
  }
}

@keyframes loading {
  0% {
    width: 0%;
  }

  40% {
    width: 20%;
  }

  80% {
    width: 70%;
  }

  85% {
    width: 75%;
  }

  90% {
    width: 80%;
  }

  100% {
    width: 100%;
  }
}
</style>