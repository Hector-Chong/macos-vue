<template>
  <div class="px-6 row-between safari__header">
    <div class="flex">
      <SytemButton class="mr-4" icon="sidebar.left" :icon-size="20" />

      <SytemButton class="mr-2" icon="chevron.backward" :icon-size="16" />
      <SytemButton icon="chevron.right" :icon-size="16" />
    </div>

    <div class="flex items-center px-1 font-bold text-white rounded-lg safari__header__url">
      <div class="flex items-center flex-1 px-1">
        <SystemIcon name="magnifyingglass" :size="12" />

        <div class="flex-1 ml-2">
          <input
            v-model="urlInput"
            class="flex-1 safari__header__url__input"
            type="text"
            placeholder="输入 URL 访问页面"
            @keydown.enter="onUrlEnter"
          />
        </div>
      </div>
      <SytemButton icon="arrow.clockwise" :icon-size="16" no-hover />
    </div>

    <div class="flex">
      <SytemButton icon="plus" :icon-size="16" />
    </div>
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue';
import SytemButton from '@/components/SystemButton/index.vue';
import SystemIcon from '@/components/SystemIcon/icon.vue';
import { isDomain, isUrl } from '@/utils/string';

export default defineComponent({
  components: { SytemButton, SystemIcon },
  setup(props, { emit }) {
    const urlInput = ref('https://xmu.edu.cn');

    const onUrlEnter = (e) => {
      if (isUrl(urlInput.value)) {
        emit('update:src', urlInput.value);
      } else if (isDomain(urlInput.value)) {
        emit('update:src', 'https://' + urlInput.value);
      } else {
        alert('不合法的地址');
      }
    };

    return {
      urlInput,
      onUrlEnter,
    };
  },
});
</script>

<style lang='scss' scoped>
$prefix: 'safari__header';

.#{$prefix} {
  height: 3.125rem;
  background-color: $window-title-bar-dark;

  &__url {
    width: 65%;
    height: 1.75rem;
    background-color: rgba(255, 255, 255, 0.1);

    &__input {
      background-color: transparent;
      outline: none;
    }
  }
}
</style>