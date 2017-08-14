<template>
  <!--发现组件-->
  <div id="explore">
    <header class="header" id="wx-header">
      <div class="_effect">
        <div class="_cover-top" style="overflow:visible">
          <div class="other" >
            <br>
            <span class="iconfont" style="touch-action: manipulation; user-select: none; -webkit-user-drag: none; -webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></span>
            <span class="iconfont icon-tips-add-friend" style="display: none;"></span>
            <div class="tips-masker" style="display: none;">
            </div>
          </div>
          <div class="center"> 发现 </div>
        </div>
      </div>
    </header>
    <section>
      <div class="weui-cells">
        <router-link to="/explore/moments" class="weui-cell weui-cell_access" tag="div">
          <div class="weui-cell__hd">
            <img src="../../assets/images/find_icon-circle.png" >
          </div>
          <div class="weui-cell__bd" style="line-height: 28px;">
            朋友圈
          </div>
          <div class="weui-cell__ft">
            <div class="home__notice">
              <img src="https://sinacloud.net/vue-wechat/images/headers/yehua.jpg" alt="" class="">
              <i class="new-msg-dot"></i>
            </div>
          </div>
        </router-link>
      </div>
      <div class="weui-cells">
        <div class="weui-cell weui-cell_access" id="scanCell">
          <div class="weui-cell__hd">
            <img src="../../assets/images/find_icon-qrcode.png" >
          </div>
          <div class="weui-cell__bd">
            扫一扫
          </div>
        </div>
        <div class="weui-cell weui-cell_access">
          <div class="weui-cell__hd">
            <img src="../../assets/images/find_icon-shake.png">
          </div>
          <div class="weui-cell__bd">
            摇一摇
          </div>
        </div>
      </div>
      <!--<div class="weui-cells">
        <div class="weui-cell weui-cell_access">
          <div class="weui-cell__hd">
            <i class="home__icon-nearby___3PPpY home__icon___2XgfG"></i>
          </div>
          <div class="weui-cell__bd">
            附近的人
          </div>
        </div>
        <div class="weui-cell weui-cell_access">
          <div class="weui-cell__hd">
            <i class="home__icon-box___3tn0U home__icon___2XgfG"></i>
          </div>
          <div class="weui-cell__bd">
            漂流瓶
          </div>
        </div>
      </div>-->

      <div class="weui-cells">
        <a href="http://wq.jd.com" class="weui-cell weui-cell_access">
          <div class="weui-cell__hd">
            <img src="../../assets/images/find_icon-shopping.png">
          </div>
          <div class="weui-cell__bd">
            购物
          </div>
        </a>
        <div class="weui-cell weui-cell_access">
          <div class="weui-cell__hd">
            <img src="../../assets/images/find_icon-moregame.png">
          </div>
          <div class="weui-cell__bd">
            游戏
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
