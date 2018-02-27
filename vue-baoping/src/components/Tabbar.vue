<template>
  <tabbar>    
    <tabbar-item :selected="index === eq" v-for="(item,index) in list" :link="item.link" :key="index">
      <img slot="icon" :src="item.img">
      <span slot="label">{{item.label}}</span>
    </tabbar-item>
  </tabbar>
</template>

<script>
import { Tabbar, TabbarItem } from 'vux'

export default {
  props: ['eq'],
  data () {
    return {
      list: [
        {
          img: require('../common/images/wallet.png'),
          label: '蓝鲸钱包',
          link: '/',
          index: 0
        }, {
          img: require('../common/images/zx.png'),
          label: '资讯',
          link: '/news',
          index: 1
        }, {
          img: require('../common/images/gywm.png'),
          label: '个人中心',
          link: '/person',
          index: 2
        }
      ]
    }
  },
  components: {
    Tabbar,
    TabbarItem
  },
  methods: {
    // clickfn (index) {
    //   this.$emit('changeindex(index)')
    // }
  }
}
</script>

<style lang="stylus">
</style>
