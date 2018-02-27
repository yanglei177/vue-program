<template>
  <tabbar id="tabbar">    
    <tabbar-item :selected="index === eq" v-for="(item,index) in list" :link="item.link" :key="index">
      <span :class="item.img" slot="icon"></span>
      <span slot="label">{{item.label}}</span>
    </tabbar-item>
  </tabbar>
</template>

<script>
import { Tabbar, TabbarItem } from 'vux'
import '../common/style/fonts.css'

export default {
  props: ['eq'],
  data () {
    return {
      list: [
        {
          img: 'icon-credit-card',
          label: '快速借钱',
          link: '/',
          index: 0
        }, {
          img: 'icon-user',
          label: '我的钱包',
          link: '/person',
          index: 2
        }, {
          img: 'icon-envelop',
          label: '发现',
          link: '/news',
          index: 1
        }
      ]
    }
  },
  components: {
    Tabbar,
    TabbarItem
  }
}
</script>

<style lang="stylus">
  #tabbar
    .weui-tabbar__icon
      font-size: 18px
</style>
