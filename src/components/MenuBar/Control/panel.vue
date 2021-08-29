<template>
  <div class="control-panel os-blur bg-main">
    <div class="mb-4 control-panel__top">
      <div class="a1">
        <div class="container">
          <div
            class="container1"
            :style="'background:url('+require('./image/wifi.png')+');background-size:100% 100%;'"
          ></div>
          <div class="container2">
            <div class="mb-1 big">Wi-Fi</div>
            <div class="text-xs little">Home</div>
          </div>
        </div>

        <div class="container">
          <div
            class="container1"
            :style="'background:url('+require('./image/蓝牙.png')+');background-size:100% 100%;'"
          ></div>
          <div class="container2">
            <div class="mb-1 big">Bluetooth</div>
            <div class="text-xs little">打开</div>
          </div>
        </div>

        <div class="container">
          <div
            class="container1"
            :style="'background:url('+require('./image/隔空投送.png')+');background-size:100% 100%;'"
          ></div>
          <div class="container2">
            <div class="mb-1 big">隔空投送</div>
            <div class="text-xs little">仅限联系人</div>
          </div>
        </div>
      </div>
      <div class="a2">
        <div class="a3">
          <div
            class="container1"
            :style="'background:url('+require('./image/勿扰模式.png')+');background-size:100% 100%;'"
          ></div>
          <div class="container5">
            <span class="big">勿扰模式</span>
          </div>
          <div class="container6"></div>
        </div>
        <div class="a4">
          <div class="a5">
            <div
              class="container14"
              :style="'background:url('+require('./image/键盘亮度.png')+');background-size:100% 100%;'"
            ></div>
            <span class="little2">键盘亮度</span>
          </div>
          <div class="a5">
            <div
              class="container14"
              :style="'background:url('+require('./image/屏幕镜像.png')+');background-size:100% 100%;'"
            ></div>
            <span class="little2">屏幕镜像</span>
          </div>
        </div>
      </div>
    </div>
    <div class="mb-3 b1">
      <div class="container7">
        <span class="big">显示器</span>
      </div>
      <div
        class="container8"
        :style="'background:url('+require('./image/显示器.png')+');background-size:100% 100%;'"
      ></div>
    </div>

    <div class="b1">
      <div class="container7">
        <span class="big">声音</span>
      </div>
      <div class="container8">
        <div
          class="container8"
          :style="'background:url('+require('./image/声音.png')+');background-size:100% 100%;'"
        ></div>
      </div>
    </div>
  </div>
</template>

<script lang='ts'>
import { defineComponent } from 'vue';

export default defineComponent({});
</script>

<style lang="scss" scoped>
$prefix: 'control-panel';

.#{$prefix} {
  display: flex;
  flex-direction: column;
  width: 300px;
  height: 310px;
  padding: 12px;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 0px 5px 0px;
  border: 1px;
  border-radius: 13px;
  text-align: left;

  .a1 {
    /*wifi+蓝牙+隔空投送*/
    display: flex;
    flex-direction: column;
    padding: 8px;
    height: 130px;
    width: 124px;
    box-shadow: rgb(255, 255, 255) 0px 0px 1px 0px;
    border: 1px;
    border-radius: 10px;
  }

  .a2 {
    /*勿扰+键盘亮度+屏幕镜像*/
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-left: 15px;
  }

  .a3 {
    /*勿扰*/
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 8px;
    height: 50px;
    box-shadow: rgb(255, 255, 255) 0px 0px 1px 0px;
    border: 1px;
    border-radius: 10px;
  }

  .a4 {
    /*键盘亮度+屏幕镜像*/
    display: flex;
    justify-content: space-between;
    height: 66px;
    width: 145px;
  }

  .a5 {
    /*键盘亮度/屏幕镜像*/
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    padding: 8px;
    box-shadow: rgb(255, 255, 255) 0px 0px 1px 0px;
    border: 1px;
    border-radius: 10px;
  }

  .control-panel__top {
    display: flex;
  }

  .b1 {
    /*显示器*/
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding: 8px 10px;
    box-shadow: rgb(255, 255, 255) 0px 0px 1px 0px;
    border: 1px;
    border-radius: 10px;
  }

  .b2 {
    /*声音*/
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    margin-top: 10px;
    padding: 8px 10px;
    height: 50px;
    width: 280px;
    box-shadow: rgb(255, 255, 255) 0px 0px 1px 0px;
    border: 1px;
    border-radius: 10px;
  }

  .c1 {
    /*音乐*/
    display: flex;
    justify-content: space-around;
    margin-top: 10px;
    padding: 8px 10px;
    height: 50px;
    width: 280px;
    box-shadow: rgb(255, 255, 255) 0px 0px 1px 0px;
    border: 1px;
    border-radius: 10px;
  }

  .container {
    display: flex;
    align-items: center;

    & + .container {
      margin-top: 10px;
    }
  }

  .container1 {
    height: 32px;
    width: 32px;
  }

  .container2 {
    margin-left: 5px;
  }

  .container4 {
    /*勿扰模式图标*/
    display: flex;
    height: 32px;
    width: 32px;
  }

  .container5 {
    /*勿扰模式文字*/
    display: flex;
    align-items: center;
    margin-left: 10px;
    height: 50px;
  }

  .container6 {
    /*勿扰模式最右边可任意调节div*/
    flex-grow: 1;
    height: 50px;
  }

  .container7 {
    /*显示器文字*/
    height: 20px;
    width: 276;
    margin-left: 2px;
    margin-bottom: 5px;
  }

  .container8 {
    height: 24px;
  }

  .container9 {
    margin-top: 2px;
    height: 25px;
    width: 240px;
    margin-left: 2px;
  }

  .container10 {
    /*声音图标2*/
    align-items: center;
    height: 32px;
    width: 32px;
    margin-left: 5px;
  }

  .container14 {
    /*键盘亮度+屏幕镜像图标*/
    display: flex;
    align-items: center;
    margin-top: 5px;
    height: 15px;
    width: 20px;
  }

  .big {
    /*字体*/
    font-size: 14px;
    color: rgb(255, 255, 255);
  }

  .middle {
    color: rgb(255, 255, 255);
  }

  .little {
    color: gray;
    letter-spacing: -0.8px;
  }

  .little2 {
    font-size: 12px;
    color: rgb(255, 255, 255);
  }
}
</style>