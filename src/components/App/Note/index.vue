<template>
  <div class="flex h-full note">
    <div class="relative p-3 box1">
      <!--第一部分-->
      <div class="mb-4">
        <div class="text1">iCloud</div>
        <div class="row-between">
          <div class="flex">
            <img class="file-black" :src="require('./image/file-black.png')" />
            <div class="ml-1 memo">备忘录</div>
          </div>

          <div class="amount">161</div>
        </div>
      </div>
      <!--第二块-->
      <div class="mb-4 div-2">
        <div class="text1">Debug</div>
        <div class="p-1 row-between div-grey">
          <div class="flex">
            <img class="file-grey" :src="require('./image/file-grey.png')" />
            <div class="ml-1 memo-grey">备忘录</div>
          </div>

          <img class="spots" :src="require('./image/spots.png')" />
        </div>
      </div>
      <!--第三块-->
      <div class="div-m">
        <div class="text1">我的 Mac 上</div>
        <div class="row-between">
          <div class="flex">
            <img class="file-black" :src="require('./image/file-black.png')" />
            <div class="ml-1 memo">备忘录</div>
          </div>

          <div class="amount">2</div>
        </div>
      </div>

      <img class="file-new" :src="require('./image/file-new.png')" />
    </div>

    <div class="box2">
      <div class="p-4 row-between">
        <img :src="require('./image/list1.png')" class="list1" />

        <div class="flex">
          <img :src="require('./image/list2.png')" class="list2" />
          <img :src="require('./image/bin.png')" class="bin" />
        </div>
      </div>

      <img class="none" :src="require('./image/none.png')" />
    </div>

    <div class="flex-1 box3">
      <img class="nav" :src="require('./image/nav.png')" />
    </div>
  </div>
</template>

<script lang='ts'>
import { defineComponent } from "vue";

export default defineComponent({

})
</script>

<style lang="scss" scoped>
$prefix: 'note';

.#{$prefix} {
  background-color: black;
}
.box1 {
  background-color: #282a2b;
  width: 15%;
}
.box2 {
  background-color: #1f2122;
  width: 25%;
  margin: 0px 1px 1px 1px;
}
.box3 {
  background-color: #1e1e1e;
}
.text1 {
  margin-bottom: 6px;
  font-size: 13px;
  font-weight: 550;
  color: #6f7172;
}
.amount {
  color: #6f7172;
  font-size: 16px;
  font-weight: 500;
}
.file-black {
  width: 24px;
  height: 24px;
}
.memo {
  font-size: 16px;
  color: #ffffff;
}
.div-grey {
  background-color: #414244;
  border-radius: 6px;
}
.file-grey {
  width: 24px;
  height: auto;
}
.memo-grey {
  /* background-color: lightcoral; */
  color: #ffffff;
  font-size: 16px;
}
.spots {
  width: 24px;
  height: 24px;
}
.amount-grey {
  /* background-color: lightcoral; */
  color: #6f7172;
  font-size: 16px;
  font-weight: 500;
  padding-right: 10px;
}
.div-m {
  margin-right: 4px;
}
.file-new {
  position: absolute;
  left: 50%;
  bottom: 40px;
  transform: translateX(-50%);
}
/*box2*/
.list1 {
  width: 41px;
  height: auto;
  border-radius: 8px;
}
.list2 {
  width: 32px;
}
.bin {
  width: 34px;
}
.none {
  background-color: lightpink;
  margin: 338px 0 0 104px;
}
/*box3*/
.nav {
  height: 70px;
  width: 100%;
  margin: -2px 0 0 -2px;
}
</style>