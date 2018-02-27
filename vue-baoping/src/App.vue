<template>
  <div id="app">
    <loading :show="isLoading" text="加载中"></loading>
    <transition>
      <keep-alive>      
        <router-view></router-view>      
      </keep-alive>
    </transition>
  </div>
</template>

<script>
import { Loading } from 'vux'
import { mapState } from 'vuex'

export default {
  components: {
    Loading
  },
  computed: {
    ...mapState({
      isLoading: state => state.vux.isLoading
    })
  }
}
</script>

<style lang="less">
  @import '~vux/src/styles/reset.less';
  @import '~vux/src/styles/1px.less';
  @import '~vux/src/styles/close.less';
  @import '~common/style/reset.css';
  @import '~common/style/fonts.css';
  #app
    .vux-header{
      .vux-header-left .left-arrow:before {
        border: 2px solid #fff;
        border-width: 2px 0 0 2px;
      }
      .vux-header-right a{
        color:#fff;
        font-size:20px;
      }
    .vux-header-right a{
      display:block
    }
  }
</style>
