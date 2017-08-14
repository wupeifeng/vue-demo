<template>
  <!--我 组件-->
  <div id="self">
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
          <div class="center"> 我 </div>
        </div>
      </div>
    </header>
    <div class="weui-tab__content" style="display: block;">
      <div class="weui-cells">
        <router-link to="/self/profile" class="weui-cell weui-cell_access">
          <div class="weui-cell__hd">
            <img src="https://sinacloud.net/vue-wechat/images/headers/header01.png" alt="" class="self-header">
          </div>
          <div class="weui-cell__bd">
            <h4 class="self-nickname">吴培</h4>

            <p class="self-wxid">微信号: wupei144664</p>
          </div>
          <div class="weui-cell__ft">
            <img src="../../assets/images/chat-info-qr.png">
          </div>
        </router-link>
      </div>
      <div class="weui-cells">
        <router-link to="/self/album" class="weui-cell weui-cell_access">
          <div class="weui-cell__hd">
            <img src="../../assets/images/me_more-my-album.png">
          </div>
          <div class="weui-cell__bd">
            <p>相册</p>
          </div>
        </router-link>
        <router-link to="/self/album" class="weui-cell weui-cell_access">
          <div class="weui-cell__hd">
            <img src="../../assets/images/me_more-my-favorites.png">
          </div>
          <div class="weui-cell__bd">
            <p>收藏</p>
          </div>
        </router-link>
        <router-link to="/self/album" class="weui-cell weui-cell_access">
          <div class="weui-cell__hd">
            <img src="../../assets/images/me_more-my-bank-card.png">
          </div>
          <div class="weui-cell__bd">
            <p>钱包</p>
          </div>
        </router-link>
        <router-link to="/self/album" class="weui-cell weui-cell_access">
          <div class="weui-cell__hd">
            <img src="../../assets/images/me_my-card-package-icon.png">
          </div>
          <div class="weui-cell__bd">
            <p>卡券</p>
          </div>
        </router-link>
      </div>
      <div class="weui-cells">
        <router-link to="/self/album" class="weui-cell weui-cell_access">
          <div class="weui-cell__hd">
            <img src="../../assets/images/me_more-expression.png">
          </div>
          <div class="weui-cell__bd">
            <p>表情</p>
          </div>
        </router-link>
      </div>
      <div class="weui-cells">
        <router-link to="/self/settings" class="weui-cell weui-cell_access">
          <div class="weui-cell__hd">
            <img src="../../assets/images/me_more-setting.png">
          </div>
          <div class="weui-cell__bd">
            <p>设置</p>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>
