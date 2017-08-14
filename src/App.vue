<template>
  <div id="app">
    <!--<img src="./assets/logo.png">-->
    <router-view></router-view>

    <div id="wx-nav">
      <nav>
        <router-link to="/wechat" tag="dl" exact>
          <dt class="iconfont icon-wechat" >
            <i class="new-msg-count">12</i>
          </dt>
          <dd>微信</dd>
        </router-link>
        <router-link to="/contact" tag="dl">
          <dt class="iconfont icon-contact" >
            <!--<i class="new-msg-count">2</i>-->
          </dt>
          <dd>通讯录</dd>
        </router-link>
        <router-link to="/explore" tag="dl">
          <dt class="iconfont icon-find" >
            <i class="new-msg-dot"></i>
          </dt>
          <dd>发现</dd>
        </router-link>
        <router-link to="/self" tag="dl">
          <dt class="iconfont icon-me" >
            <!--<i class="new-msg-dot"></i>-->
          </dt>
          <dd>我</dd>
        </router-link>
      </nav>
    </div>
  </div>


</template>

<script>
//  import './components/wechat/wechat.vue';
export default {
  name: 'app'
}
</script>

<style>
  #app{
    position: relative;
  }

  nav{
    position: absolute;
    bottom: 0px;
    border-top: 1px gainsboro solid;
  }

</style>
