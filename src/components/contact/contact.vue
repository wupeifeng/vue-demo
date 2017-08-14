<template>
  <div id="contact">
    <header class="header" id="wx-header">
      <div class="_effect">
        <div class="_cover-top" style="overflow:visible">
          <div class="other" >
            <span class="iconfont icon-tips-jia" style="touch-action: manipulation; user-select: none; -webkit-user-drag: none; -webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></span>
            <span class="iconfont icon-tips-add-friend" style="display: none;"></span>
            <div class="tips-masker" style="display: none;">
            </div>
          </div>
          <div class="center"> 通讯录</div>
          <br>
        </div>
      </div>
    </header>
    <section>
      <div class="weui-cells_contact-head weui-cells weui-cells_access" style="margin-top:-1px">
        <router-link to="/contact/new-friends" class="weui-cell">
          <div class="weui-cell_hd"> <img class="img-obj-cover" src="../../assets/images/contact_top-friend-notify.png"> </div>
          <div class="weui-cell_bd weui-cell_primary">
            <p>新的朋友</p>
          </div>
        </router-link>
        <router-link to="/contact/group-list" class="weui-cell">
          <div class="weui-cell_hd"> <img class="img-obj-cover" src="../../assets/images/contact_top-addgroup.png"> </div>
          <div class="weui-cell_bd weui-cell_primary">
            <p>群聊</p>
          </div>
        </router-link>
        <router-link to="/contact/tags" class="weui-cell">
          <div class="weui-cell_hd"> <img class="img-obj-cover" src="../../assets/images/contact_top-tag.png"> </div>
          <div class="weui-cell_bd weui-cell_primary">
            <p>标签</p>
          </div>
        </router-link>
        <router-link to="/contact/official-accounts" class="weui-cell">
          <div class="weui-cell_hd"><img class="img-obj-cover" src="../../assets/images/contact_top-offical.png"></div>
          <div class="weui-cell_bd weui-cell_primary">
            <p>公众号</p>
          </div>
        </router-link>
      </div>
      <!--联系人集合-->
      <template>
        <!--首字母-->
        <div class="weui-cells__title">A</div>
        <div class="weui-cells">
          <router-link to="/" class="weui-cell weui-cell_access" tag="div">
            <div class="weui-cell__hd">
              <img src="../../assets/images/contact_top-offical.png" class="home__mini-avatar___1nSrW">
            </div>
            <div class="weui-cell__bd">
              阿慧
            </div>
          </router-link>
        </div>
        <div class="weui-cells__title">B</div>
        <div class="weui-cells">
          <router-link to="/" class="weui-cell weui-cell_access" tag="div">
            <div class="weui-cell__hd">
              <img src="../../assets/images/contact_top-offical.png" class="home__mini-avatar___1nSrW">
            </div>
            <div class="weui-cell__bd">
              彬仔
            </div>
          </router-link>
        </div>
      </template>
    </section>
  </div>
</template>
