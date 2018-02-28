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
  @import 'common/style/fonts.css';
</style>
