<template>
  <div class="flex h-full wechat">
    <WechatTabbar />
    <WechatChatlist />
    <WechatDetail />
  </div>
</template>

<script lang='ts'>
import { defineComponent, inject } from "vue";

import WechatTabbar from './tabbar.vue'
import WechatChatlist from './chatlist.vue'
import WechatDetail from './detail.vue'
import WindowApi from "@/components/WindowManager/core/WindowApi";
import { useWindow } from "@/hooks/window/useWindow";

export default defineComponent({
  name: 'AppWechat',
  components: { WechatTabbar, WechatChatlist, WechatDetail },
})
</script>

<style lang="scss" scoped>
@import './style/index';
</style>