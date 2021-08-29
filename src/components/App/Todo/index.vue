<template>
  <div class="flex h-full os-blur">
    <div class="p-4 left">
      <div class="mb-6 left-bar__grid">
        <div class="left-bar__grid__item">
          <div class="mb-1 row-between">
            <div class="left-bar__grid__item__icon">
              <img :src="require('./image/今天.png')" alt />
            </div>
            <div class="left-bar__grid__item__amount">1</div>
          </div>

          <div class="text-white left-bar__grid__item_title">今天</div>
        </div>
        <div class="left-bar__grid__item">
          <div class="mb-1 row-between">
            <div class="left-bar__grid__item__icon">
              <img :src="require('./image/计划.png')" alt />
            </div>
            <div class="left-bar__grid__item__amount">1</div>
          </div>

          <div class="text-white left-bar__grid__item_title">计划</div>
        </div>

        <div class="left-bar__grid__item">
          <div class="mb-1 row-between">
            <div class="left-bar__grid__item__icon">
              <img :src="require('./image/全部.png')" alt />
            </div>
            <div class="left-bar__grid__item__amount">1</div>
          </div>

          <div class="text-white left-bar__grid__item_title">全部</div>
        </div>
        <div class="left-bar__grid__item">
          <div class="mb-1 row-between">
            <div class="left-bar__grid__item__icon">
              <img :src="require('./image/旗标.png')" alt />
            </div>
            <div class="left-bar__grid__item__amount">0</div>
          </div>

          <div class="text-white left-bar__grid__item_title">旗标</div>
        </div>
      </div>

      <div class="left__list">
        <div class="mb-2 text-gray-500">我的列表</div>

        <div class="p-2 text-white bg-blue-500 rounded left__list__item row-between">
          <div class="flex items-center">
            <img class="left__list__item__icon" :src="require('./image/提醒.png')" alt />
            <div class="ml-1 left__list__item__title">提醒</div>
          </div>

          <div class="left__list__item__amount">1</div>
        </div>
      </div>
    </div>

    <div class="flex-1 p-6 right">
      <div class="mb-2 text-6xl text-blue-600 p2">今天</div>

      <div class="p-2 text-white rounded todo-item">
        <div class="text-xl">测试事项 1</div>
        <div class="text-gray-400">
          <span>提醒</span>
          <span class="px-2">-</span>
          <span class="text-red">2021/8/31</span>
        </div>
      </div>

      <div class="p-2 text-white rounded todo-item">
        <div class="text-xl">测试事项 2</div>
        <div class="text-gray-400">
          <span>提醒</span>
          <span class="px-2">-</span>
          <span class="text-red">2021/8/31</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({});
</script>

<style lang="scss" scoped>
.left,
.right {
  height: 100%;
}

.left {
  width: 30%;
  background-color: rgb(30, 30, 30, 0.9);
}

.right {
  background-color: rgb(23, 23, 23, 0.9);
}

.left-bar__grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 8px;
  row-gap: 8px;
}

.left-bar__grid__item {
  height: 65px;
  padding: 8px;
  background-color: rgba(72, 72, 83, 0.85);
  font-weight: bolder;
  border-radius: 4px;
}

.left-bar__grid__item:hover {
  background-color: #3785f7;
  color: white;
}

.left-bar__grid__item__icon {
  img {
    width: 25px;
    height: 25px;
  }
}

.left-bar__grid__item__amount {
  color: #fff;
}

.left__list {
  height: 50%;
}

.left__list__item {
  &__icon {
    width: 25px;
    height: 25px;
  }
}

.todo-item {
  transition: background-color 0.25s ease-in-out;

  &:hover {
    background-color: #5e5f5f;
  }

  & + & {
    margin-top: 8px;
    padding-top: 12px;
    border-top: 1px solid rgb(68, 68, 68);
  }

  .text-red {
    color: rgb(255, 104, 104);
  }
}
</style>