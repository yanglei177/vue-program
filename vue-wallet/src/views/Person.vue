<template>
  <div id="person" style="width:100%;height:100%">
    <x-header :left-options="{backText: ''}" title="个人中心"></x-header>
    <blur :blur-amount=100 :url="url" :height="150">
      <flexbox class="personbox vux-1px-b" justify="space-around" align="center">
        <flexbox-item :span="6" class="user">
            <img :src="url" />
            <rater v-model="rater" star="✩" active-color="#FF9900" :margin="2"></rater>
        </flexbox-item>
        <flexbox-item :span="8" class="userinfo">
          <div class="mobile">{{name}}</div>
          <div class="mobile">{{tel}}</div>          
          <span @click="logout" class="icon-cog"></span>
        </flexbox-item>
      </flexbox>
    </blur>
    <divider class="divider">借款记录</divider>
    <div id="container">
      <div v-for="(item,index) of list" :key="index">
        <flexbox justify="space-around" align="center"class="flexlist">
          <flexbox-item><div class="flex-demo tr"><span class="sub">¥</span><span class="money">{{item.amount | currency('',0)}}</span></div></flexbox-item>
          <flexbox-item><div class="flex-demo"><span class="super">{{item.term}}</span><span class="common">个月</span></div></flexbox-item>
          <flexbox-item><div class="flex-demo last"><span class="time">{{item.lastUpdateTime}}</span></div></flexbox-item>
          <badge :text="resStatus(item.status)" :class="item.status"></badge>
        </flexbox>
      </div>
      <div v-if="list" v-infinite-scroll="loadMore" infinite-scroll-disabled="busy" infinite-scroll-distance="0">
        <load-more v-show="showbusy" tip="正在加载" background-color="#f4f4f4"></load-more>
      </div>
    </div>
    <tabbar :eq="eq"></tabbar>
  </div>
</template>

<script>
import { XHeader, XInput, XButton, Divider, Flexbox, FlexboxItem, Badge, ViewBox, LoadMore, Blur, Rater } from 'vux'
import Tabbar from 'components/Tabbar'
import {currency} from '../common/js/util'

export default {
  data () {
    return {
      name: '',
      tel: '',
      list: [],
      eq: 1,
      pageNum: 1,
      pageSize: 8,
      busy: true,
      showbusy: false,
      rater: 5,
      url: require('../common/images/user.jpg')
    }
  },
  components: {
    XHeader,
    XInput,
    XButton,
    Divider,
    Flexbox,
    FlexboxItem,
    Badge,
    ViewBox,
    LoadMore,
    Rater,
    Blur,
    Tabbar
  },
  filters: {
    currency
  },
  created () {
    this.init()
  },
  methods: {
    resStatus (status) {
      let sta = ''
      switch (status) {
        case 'audit':
          sta = '审核中'
          break
        case 'lended':
          sta = '放款中'
          break
        case 'refused':
          sta = '已拒绝'
          break
        case 'paid':
          sta = '已还清'
          break
      }
      return sta
    },
    loadMore: function () {
      let vue = this
      vue.busy = true
      vue.showbusy = true
      setTimeout(() => {
        vue.pageNum++
        vue.init(true)
      }, 1000)
    },
    init (flag) {
      let vue = this
      this.get({
        url: `rest/credit/v1/vipcenter/${localStorage.getItem('walletid')}/${this.pageNum}/${this.pageSize}`,
        success: function (data) {
          if (data.code === 200) {
            if (flag) {
              if (data.pageInfo.list.length < vue.pageSize) {
                vue.busy = true
              } else {
                vue.busy = false
              }
              vue.list = vue.list.concat(data.pageInfo.list)
              vue.showbusy = false
            } else {
              if (data.pageInfo.list.length < vue.pageSize) {
                vue.busy = true
              } else {
                vue.busy = false
              }
              vue.list = data.pageInfo.list
              vue.showbusy = false
            }
            vue.name = data.customer.name
            vue.tel = data.customer.mobile
          }
        }
      })
    },
    logout () {
      localStorage.clear()
      this.$router.push({path: '/login'})
    }
  },
  activated: function () {
    this.eq = 1
  },
  deactivated: function () {
    this.eq = null
  }
}
</script>

<style lang="stylus">
#person
  .weui-tabbar
    position:fixed
  .vux-rater
    margin-left:15px
</style>
<style lang="stylus" scoped>
  html, body
    height: 100%
    width: 100%
    overflow-x: hidden  
  .divider
    margin:15px auto
    width:80%
  .flexlist.vux-flexbox
    width:94%
    margin:0px auto 16px
    height: 60px
    position:relative
    background:#fff
    border-radius: 0px
    .flex-demo
      text-align: center
      &.tr
        text-align: right
      span
        font-size: 16px
        color: #f74c31
      span.time
        color: #666
        font-size: 12px
      span.sub
        vertical-align: text-bottom
        font-size: 14px
        color: #f74c31
        line-height: 14px
        margin-right: 3px
      span.super
        vertical-align: text-top;
        font-size: 20px
        color: #f74c31
        line-height: 16px
      span.money
        font-size: 20px
    .vux-badge
      border-radius: 0px;
      position: absolute;
      right: 0px;
      top: -7px;
      height: 21px;
      line-height: 20px;
    .vux-badge.refused
      background:#aaa
    .vux-badge.lended
      background:rgba(0,0,0,0.8)
    .vux-badge.paid
      background:#1AAD19    
  .personbox
    // background:#fff
    padding:20px 10px
    box-sizing: border-box
    .user
      display: flex
      justify-content: center
      align-items: center
      flex-direction:column
      img
        width: 80px
        height: 80px
        border-radius: 50%
        border: 4px solid #ececec;
    .userinfo
      position: relative
      span[class^="icon-"]
        position:absolute
        right: 35px
        top: -20px
        font-size: 24px
        color: #fe5722
      div
        line-height:24px
        font-size:18px
        color:rgba(247, 76, 49,1)
        margin-bottom:7px
  #container
    padding-bottom:50px
</style>
