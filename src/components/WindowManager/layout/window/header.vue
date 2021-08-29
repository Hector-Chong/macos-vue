<template>
  <div class="flex px-2 os-window__header os-blur" @mousedown="onHeaderMousedown">
    <div class="h-fll w-15 row-between os-window__header__action">
      <div class="action__button action__button--close" @click="handleClose">
        <SystemIcon class="icon" name="xmark" :size="6" color="#444" />
      </div>

      <div class="action__button action__button--minimize" @click="handleMinimize">
        <SystemIcon class="icon" name="line.diagonal" :size="6" color="#444" />
      </div>

      <div class="action__button action__button--fullscreen" @click="handleMaximum">
        <SystemIcon
          class="icon"
          name="arrow.up.backward.and.arrow.down.forward"
          :size="6"
          color="#444"
        />
      </div>
    </div>

    <div class="font-bold text-center text-white os-window__header__title">{{title}}</div>
  </div>
</template>

<script lang='ts'>
import { defineComponent, inject } from "vue";
import SystemIcon from '@/components/SystemIcon'
import WindowApi from "../../core/WindowApi";
import { useWindow } from "@/hooks/window/useWindow";

const WindowHeaderProps = {
  title: {
    type: String
  },
};

export default defineComponent({
  name: 'OsWindowHeader',
  components: { SystemIcon },
  props: WindowHeaderProps,
  setup(props) {
    let onMove = false,
      lastClientX = 0,
      lastClientY = 0

    const windowApi = inject('window') as WindowApi

    const onHeaderMousedown = () => {
      onMove = true
      windowApi.setTransition(false)
    }

    const onHeaderMove = (e: MouseEvent) => {
      if (!onMove || lastClientX === 0 || lastClientY === 0) {
        lastClientX = e.clientX
        lastClientY = e.clientY
      }

      windowApi?.setPositionTo(e.clientX - lastClientX, e.clientY - lastClientY)

      lastClientX = e.clientX
      lastClientY = e.clientY
    }

    document.body.addEventListener('mousemove', onHeaderMove)

    const onHeaderMouseup = () => {
      onMove = false
      lastClientX = lastClientY = 0
      windowApi.setTransition(true)
    }

    document.body.addEventListener('mouseup', onHeaderMouseup)

    const handleMaximum = () => windowApi.maximum()
    const handleClose = () => windowApi.close()
    const handleMinimize = () => windowApi.minimize()

    return {
      onHeaderMousedown,
      handleMaximum,
      handleClose,
      handleMinimize
    }
  }
})
</script>

<style lang="scss" scoped>
$prefix: 'os-window__header';

.#{$prefix} {
  width: 100%;
  height: 1.75rem;
  background-color: $window-header-view-dark;
  border-radius: 0.4rem 0.4rem 0 0;

  &__action {
    width: 3.5rem;

    &:hover {
      .action__button > .icon {
        visibility: visible;
      }
    }

    .action__button {
      position: relative;
      width: 0.875rem;
      height: 0.875rem;
      border-radius: 50%;

      &--close {
        background-color: $os-red;
        border: 0.031rem solid rgb(190, 84, 75);
      }

      &--minimize {
        background-color: $os-orange;
        border: 0.031rem solid #c18100;
      }

      &--fullscreen {
        background-color: $os-green;
        border: 0.031rem solid rgb(77, 157, 67);
      }

      .icon {
        visibility: hidden;
        position: absolute;
        left: 3px;
        top: 3px;
      }
    }
  }

  &__title {
    position: absolute;
    width: 60%;
    left: 20%;
    height: 100%;
    line-height: 1.75rem;
    letter-spacing: 0.08rem;
    user-select: none;
  }
}
</style>