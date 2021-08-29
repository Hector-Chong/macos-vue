
<script lang="tsx">
import { defineComponent, getCurrentInstance, PropType } from "vue";
import type { MenuItemProp } from './types';
import MenuItem from './MenuItem.vue'
import MenuLine from './MenuLine.vue'
import { getMenuStyle } from "./useSystemMenu";

const props = {
  options: {
    type: Array as PropType<MenuItemProp[]>
  },
  width: {
    type: [Number, String],
    default: '14rem'
  }
}
export default defineComponent({
  props,
  setup(props) {
    const instance = getCurrentInstance()

    const createMenuItems = (options: MenuItemProp[]) => {
      return options.map((option, index) => {
        const { title, divided = false } = option

        return (
          <>
            <MenuItem>{title}</MenuItem>
            {divided && index !== options.length - 1 ? <MenuLine /> : null}
          </>)
      })
    }

    const renderMenuItems = () => {
      const { options } = props

      if (Array.isArray(options) && options.length) {
        return createMenuItems(options)
      } else {
        return instance?.slots.default ? instance?.slots.default() : []
      }
    }

    const menuStyle = getMenuStyle()

    return () => (
      <div class='system-menu' style={menuStyle}>
        {renderMenuItems()}
      </div>
    )
  }
})
</script>

<style lang='scss' scoped>
.system-menu {
  position: absolute;
  top: 100%;
  z-index: 10;
  cursor: default;
  color: #fff;
  background-color: rgba(30, 30, 30, 0.6);
  border: 0.03rem solid rgb(88 68 68 / 37%);
  backdrop-filter: blur(30px);
  border-radius: 0.2rem;
}
</style>