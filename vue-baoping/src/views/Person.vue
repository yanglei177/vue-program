<template>
  <div id="person" style="width:100%;height:100%">
    <x-header :left-options="{backText: ''}" title="个人中心"></x-header>
    <flexbox class="personbox vux-1px-b" justify="space-around">
      <flexbox-item class="user" :span="3"></flexbox-item>
      <flexbox-item :span="8" class="userinfo">
        <div class="mobile"><span>姓名：</span><span class="red">{{name}}</span></div>
        <div class="mobile"><span>手机号：</span><span class="red">{{tel}}</span></div>
        <div><router-link to="/login"><x-button type="primary" mini action-type="button">切换用户</x-button></router-link></div>
      </flexbox-item>
    </flexbox>
    <divider class="divider">借款记录</divider>
    <div id="container">
      <flexbox justify="space-around" align="center" v-for="(item,index) of list" :key="index" class="flexlist">
        <flexbox-item><div class="flex-demo">借款金额<br/><span>{{item.amount}}（万元）</span></div></flexbox-item>
        <flexbox-item><div class="flex-demo">借款期限<br/><span>{{item.term}}个月</span></div></flexbox-item>
        <flexbox-item><div class="flex-demo last"><span class="time">{{item.lastUpdateTime}}</span></div></flexbox-item>
        <badge :text="resStatus(item.status)" :class="item.status"></badge>
      </flexbox>
      <div v-if="list" v-infinite-scroll="loadMore" infinite-scroll-disabled="busy" infinite-scroll-distance="0">
        <load-more v-show="showbusy" tip="正在加载" background-color="#f4f4f4"></load-more>
      </div>
    </div>
    <tabbar :eq="eq"></tabbar>
  </div>
</template>

<script>
import { XHeader, XInput, XButton, Divider, Flexbox, FlexboxItem, Badge, ViewBox, LoadMore } from 'vux'
import Tabbar from 'components/Tabbar'

export default {
  data () {
    return {
      name: '',
      tel: '',
      list: [],
      eq: 2,
      pageNum: 1,
      pageSize: 8,
      busy: true,
      showbusy: false
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
    Tabbar
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
    }
  },
  activated: function () {
    this.eq = 2
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
    border:1px solid #C0BFC4
    width:94%
    margin:0px auto 10px
    height: 60px
    position:relative
    background:#fff
    border-radius: 6px
    .flex-demo
      text-align: center
      &.last
        margin-top:15px
      span
        font-size: 12px
        color: #f74c31
      span.time
        color: #999
        font-size: 12px
    .vux-badge
      border-radius: 4px;
      position: absolute;
      right: 0px;
      top: 0;
      height: 21px;
      line-height: 20px;
    .vux-badge.refused
      background:#aaa
    .vux-badge.lended
      background:rgba(0,0,0,0.8)
    .vux-badge.paid
      background:#1AAD19    
  .personbox
    background:#fff
    padding:20px 10px
    box-sizing: border-box
    .user
      background: url('../common/images/user.png') no-repeat center center
      background-size: 80px 100%
      border-radius:8px
      margin-left: 20px
      height:80px  
    .userinfo
      div
        line-height:24px
        font-size:14px
        color:rgb(153, 153, 153)
        margin-bottom:7px
        display:flex
        span
          flex:0 0 70px
          text-align: right
        span.red
          color:rgba(247, 76, 49,0.6)
          text-align: left
  #container
    padding-bottom:50px
</style>
