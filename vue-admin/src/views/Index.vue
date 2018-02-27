<template>
  <div id="vue-index">
    <nav-header></nav-header>
    <div class="main">
      <sider num="3" @change="changeNum"></sider>
      <div class="aside">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import NavHeader from 'components/NavHeader'
  import Sider from 'components/Sider'

  export default {
    data: {
      num: 1
    },
    methods: {
      changeNum() {
        this.num = 2;
      }
    },
    components: {
      NavHeader,
      Sider
    }
  }
</script>

<style scoped rel="text/css">
  #vue-index{
    background:#f6fafd;
    height:100%;
  }
</style>
