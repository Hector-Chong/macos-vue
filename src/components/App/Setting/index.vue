<template>
  <div class="h-full bg-main os-blur">
    <div class="menu">
      <!-- 顶部 -->
      <div class="top">
        <!-- 左部分 -->
        <div class="left">
          <!-- 头像 -->
          <div class="head">
            <img style="height: 100px; " :src="require('./image/head.jpg')" />
          </div>
          <!-- 文字 -->
          <div class="left_text">
            <div class="top_text">cyf</div>
            <div class="bottom_text">Apple ID、iCloud、媒体与App Store</div>
          </div>
        </div>

        <!-- 右部分 -->
        <div class="right">
          <div class="pic">
            <img style="height: 60px; " :src="require('./image/apple id.png')" />
            <div class="text">Apple ID</div>
          </div>
          <div class="pic">
            <img style="height: 60px; " :src="require('./image/jiaren.png')" />
            <div class="text">家人共享</div>
          </div>
        </div>
      </div>

      <!-- 中部1 -->
      <div class="midd1">
        <!-- 第一行 -->
        <div class="line1">
          <div class="pic">
            <img style="height: 60px; " :src="require('./image/tongyong.png')" />
            <div class="text">通用</div>
          </div>
          <div class="pic">
            <img style="height: 60px; " :src="require('./image/zhuomian.png')" />
            <div class="text">桌面与</div>
            <div class="text">屏幕保护程序</div>
          </div>
          <div class="pic">
            <img style="height: 60px; " :src="require('./image/chengxu.png')" />
            <div class="text">程序坞与</div>
            <div class="text">菜单栏</div>
          </div>
          <div class="pic">
            <img style="height: 60px; " :src="require('./image/diaodu.png')" />
            <div class="text">调度中心</div>
          </div>
          <div class="pic">
            <img style="height: 60px; " :src="require('./image/siri.png')" />
            <div class="text">Siri</div>
          </div>
          <div class="pic">
            <img style="height: 60px; " :src="require('./image/jujiao.png')" />
            <div class="text">聚焦</div>
          </div>
          <div class="pic">
            <img style="height: 60px; " :src="require('./image/yuyan.png')" />
            <div class="text">语言与地区</div>
          </div>
          <div class="pic">
            <img style="height: 60px; " :src="require('./image/tongzhi.png')" />
            <div class="text">通知</div>
          </div>
        </div>

        <!-- 第二行 -->
        <div class="line2">
          <div class="pic">
            <img style="height: 60px; " :src="require('./image/hulianwang.png')" />
            <div class="text">互联网账户</div>
          </div>
          <div class="pic">
            <img style="height: 60px; " :src="require('./image/chukong.png')" />
            <div class="text">触控ID</div>
          </div>
          <div class="pic">
            <img style="height: 60px; " :src="require('./image/yonghu.png')" />
            <div class="text">用户与群组</div>
          </div>
          <div class="pic">
            <img style="height: 60px; " :src="require('./image/fuzhu.png')" />
            <div class="text">辅助功能</div>
          </div>
          <div class="pic">
            <img style="height: 60px; " :src="require('./image/pingmu.png')" />
            <div class="text">屏幕使用</div>
            <div class="text">时间</div>
          </div>
          <div class="pic">
            <img style="height: 60px; " :src="require('./image/kuozhan.png')" />
            <div class="text">扩展</div>
          </div>
          <div class="pic">
            <img style="height: 60px; " :src="require('./image/anquan.png')" />
            <div class="text">安全性与</div>
            <div class="text">隐私</div>
          </div>
          <!-- <div class = "pic">
              <img style ="height: 60px; " src = "BaiduNetdisk_1024x1024-32.png')"  >
              <div style="font-size: 12px; font-weight:900px; color: gray;">百度网盘</div>
          </div>-->
        </div>
      </div>

      <!-- 中部2 -->
      <div class="midd2">
        <!-- 第一行 -->
        <div class="line1">
          <div class="pic">
            <img style="height: 60px; " :src="require('./image/ruanjian.png')" />
            <div class="text">软件更新</div>
          </div>
          <div class="pic">
            <img style="height: 60px; " :src="require('./image/wangluo.png')" />
            <div class="text">网络</div>
          </div>
          <div class="pic">
            <img style="height: 60px; " :src="require('./image/lanya.png')" />
            <div class="text">蓝牙</div>
          </div>
          <div class="pic">
            <img style="height: 60px; " :src="require('./image/shengyin.png')" />
            <div class="text">声音</div>
          </div>
          <div class="pic">
            <img style="height: 60px; " :src="require('./image/dayinji.png')" />
            <div class="text">打印机与</div>
            <div class="text">扫描仪</div>
          </div>
          <div class="pic">
            <img style="height: 60px; " :src="require('./image/jianpan.png')" />
            <div class="text">键盘</div>
          </div>
          <div class="pic">
            <img style="height: 60px; " :src="require('./image/chukongban.png')" />
            <div class="text">触控板</div>
          </div>
          <div class="pic">
            <img style="height: 60px; " :src="require('./image/shubiao.png')" />
            <div class="text">鼠标</div>
          </div>
        </div>
        <!-- 第二行 -->
        <div class="line2">
          <div class="pic">
            <img style="height: 60px; " :src="require('./image/xianshiqi.png')" />
            <div class="text">显示器</div>
          </div>
          <div class="pic">
            <img style="height: 60px; " :src="require('./image/suihang.png')" />
            <div class="text">随航</div>
          </div>
          <div class="pic">
            <img style="height: 60px; " :src="require('./image/dianchi.png')" />
            <div class="text">电池</div>
          </div>
          <div class="pic">
            <img style="height: 60px; " :src="require('./image/riqi.png')" />
            <div class="text">日期与时间</div>
          </div>
          <div class="pic">
            <img style="height: 60px; " :src="require('./image/共享.png')" />
            <div class="text">共享</div>
          </div>
          <div class="pic">
            <img style="height: 60px; " :src="require('./image/shijianjiqi.png')" />
            <div class="text">时间机器</div>
          </div>
          <div class="pic">
            <img style="height: 60px; " :src="require('./image/cipan.png')" />
            <div class="text">启动磁盘</div>
          </div>
          <!-- <div class = "pic">
              <img style ="height: 60px; " src = "BaiduNetdisk_1024x1024-32.png')"  >
              <div style="font-size: 12px; font-weight:900px; color: gray;">百度网盘</div>

          </div>-->
        </div>
      </div>

      <!-- 底部 -->
      <div class="bottom">
        <div class="bottom_line">
          <div class="bottom_pic">
            <img style="height: 60px; " :src="require('./image/flash.png')" />
            <div class="b_text">Flash Player</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue';

export default defineComponent({
  setup() {},
});
</script>

<style lang='scss' scoped>
.menu {
  width: 680px;
  height: 740px;
  background-color: gray;
  /* align-content: center; */
}
.top {
  background-color: #1f2021;
  height: 120px;
  /* display: flex; */
}
.midd1 {
  background-color: #262728;
  height: 220px;
  padding: 10px;
  /* display: flex; */
}
.midd2 {
  background-color: #1f2021;
  height: 220px;
  padding: 10px;
  /* display: flex; */
}
.bottom {
  background-color: #262728;
  height: 140px;
  /* display: flex; */
  padding-left: 10px;
}
.line1 {
  height: 100px;
  width: 660px;
  margin: 0px;
  justify-content: space-around;
  display: flex;
}
.line2 {
  height: 100px;
  width: 660px;
  margin-top: 15px;
  float: left;
  /* padding: 10px;  */
  /* justify-content: space-around;    */
  display: flex;
}
.pic {
  height: 60px;
  margin: 11.1px;
  text-align: center;
  /* float: left; */
  /* width: auto; */
  /* display: inline-flex; */
  /* position: relative; */
}
.bottom_line {
  height: 100px;
  width: 660px;
  margin-top: 10px;
  float: left;
  /* padding: 10px;  */
  /* justify-content: space-around;    */
  display: flex;
}
.bottom_pic {
  margin: 11.1px;
  height: 60px;
}
.text {
  /* margin: 1px; */
  font-size: 12px;
  font-weight: 900px;
  color: rgb(182, 179, 179);
  width: 60px;
}
.b_text {
  font-size: 12px;
  font-weight: 900px;
  color: rgb(182, 179, 179);
}
.left {
  height: 120px;
  width: 400px;
  float: left;
  display: flex;
  /* top: 50%; */
}
.right {
  margin-right: 10px;
  margin-top: 5px;
  display: flex;
  float: right;
}
.head {
  height: 90px;
  width: 90px;
  /* display: flex; */
  /* justify-content: center; */
  margin-left: 15px;
  margin-top: 15px;
  border-radius: 50%;
  overflow: hidden;
}
.left_text {
  height: 90px;
  margin-top: 25px;
  margin-left: 10px;
}
.top_text {
  font-size: 25px;
  color: honeydew;
}
.bottom_text {
  margin-top: 3px;
  font-size: 5px;
  color: honeydew;
}
</style>