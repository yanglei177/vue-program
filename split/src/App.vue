<template>
  <div id="app">
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
  computed: {
    ...mapState([
      'loading'      
    ])
  }
}
</script>
<style>
</style>
