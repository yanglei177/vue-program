<template>
  <div id="vue-index">
    <nav-header></nav-header>
    <div class="main">
      <sider></sider>
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
