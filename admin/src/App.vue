<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>
<style>
  html, body {
    height: 100%;
    width: 100%;
  }
  #app{
    height:100%;
    background: url(common/images/login_bg.jpg) no-repeat center center;
  }
</style>

