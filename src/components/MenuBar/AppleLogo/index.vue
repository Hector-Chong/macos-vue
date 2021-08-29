<template>
  <SubMenu :options="options" class="px-4 apple-logo-wrapper">
    <SystemIcon class="apple-logo" name="applelogo" :size="16" />
  </SubMenu>
</template>

<script lang='ts'>
import { defineComponent } from "vue";
import SubMenu from "@/components/SubMenu/index.vue";
import { MenuItemProp } from "@/components/SystemMenu/src/types";
import SystemIcon from '@/components/SystemIcon';

export default defineComponent({
  components: { SubMenu, SystemIcon },
  setup() {
    const options: MenuItemProp[] = [
      { title: '关于本机', divided: true },
      { title: '系统偏好设置' },
      { title: 'App Store...', divided: true },
      { title: '强制退出...', divided: true },
      { title: '重新启动', divided: true },
      { title: '退出登录', },
    ]

    return {
      options
    }
  }
});
</script>

<style lang='scss' scoped>
.apple-logo-wrapper {
  .apple-logo {
    margin-top: 0.28125rem;
  }
}
</style>