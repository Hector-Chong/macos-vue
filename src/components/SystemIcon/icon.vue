<template>
  <svg aria-hidden="true" :class="['system-icon',{'icon-spin':spin}]" :style="iconStyle">
    <use :xlink:href="icon" />
  </svg>
</template>

<script lang='ts'>
import { computed, CSSProperties, defineComponent } from 'vue';

export default defineComponent({
  name: 'OsIconSvg',
  props: {
    prefix: {
      type: String,
      default: 'icon',
    },
    name: {
      type: String,
      required: true,
    },
    size: {
      type: Number,
      default: 13,
    },
    spin: {
      type: Boolean,
      default: false,
    },
    color: {
      type: String,
      default: '#fff'
    }
  },
  setup(props) {
    const icon = computed(() => '#os-' + props.name);

    const iconStyle = computed((): CSSProperties => {
      const { size } = props

      const sizeUnit = (+size * 0.0625) + 'rem'

      return {
        width: sizeUnit,
        height: sizeUnit,
        fill: props.color
      }
    })

    return { icon, iconStyle }
  },
});
</script>

<style lang="scss" scoped>
@keyframes spinning {
  from {
    transform: rotate(0);
  }

  to {
    transform: rotate(360deg);
  }
}

.system-icon {
  display: inline-block;
  overflow: hidden;
  vertical-align: -0.15em;
}

.icon-spin {
  animation: spinning 1s infinite linear;
}
</style>
