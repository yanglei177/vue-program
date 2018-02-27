<template>
  <div>
    <swiper :aspect-ratio="0.7" :list="baseList" dots-position="center" :auto="true" :loop="true" v-model="index"></swiper>
    <div id="topbar">
      <div class="topfixed"></div>
      <div class="logo"><img src='../common/images/new_logo.png' /></div>
      <div class="tel"><a href="tel:4000621043"><img src="../common/images/indexdel.png" alt=""></a></div>
    </div>
    <flexbox class="listbox" justify="center" align="center">
      <flexbox-item class="vux-1px-r">
        <p>本月车险出单数量</p>
        <p><span>1单</span></p>
      </flexbox-item>
      <flexbox-item>
        <p>本月车险总金额</p>
        <p><span>￥6644</span></p>
      </flexbox-item>
    </flexbox>
    <div id="gridbox">
      <grid :cols="2">
        <grid-item link="/cxbj_addcar" label="车险比价">
          <img slot="icon" src="../common/images/cxbj.jpg">
        </grid-item>
        <grid-item :link="{ path: '/component/cell'}" label="会员专供">
          <img slot="icon" src="../common/images/hyzg.jpg">
        </grid-item>
        <grid-item link="/component/cell" @on-item-click="onItemClick" label="快速理赔">
          <img slot="icon" src="../common/images/dslp.png">
        </grid-item>
        <grid-item :link="{ path: '/component/cell'}" label="商户中心">
          <img slot="icon" src="../common/images/shzx.jpg">
        </grid-item>
      </grid>
      <router-link :to="{path: '/component/gdgl'}"><div class="gdbox">工单管理</div></router-link>
    </div>
  </div>
</template>

<script>
import { Swiper, Flexbox, FlexboxItem, Grid, GridItem } from 'vux'

export default {
  data () {
    return {
      baseList: [],
      index: 0
    }
  },
  computed: {},
  components: {
    Swiper,
    Flexbox,
    FlexboxItem,
    Grid,
    GridItem
  },
  methods: {
    init () {
      let vue = this
      vue.post({
        url: 'baoping-api/api/agency/center/agencyLoginById',
        data: {
          'id': localStorage.getItem('proxy_uid')
        },
        success: function (data) {
          if (data.code === '0') {
            if (data.vo.banners) {
              data.vo.banners.forEach((ele) => {
                vue.baseList.push({
                  url: ele.url,
                  img: ele.name,
                  title: ele.remark || '保评车险'
                })
              })
            }
          } else {
            vue.prop({text: data.message})
          }
        }
      })
    },
    onItemClick () {
      console.log(1)
    }
  },
  created () {
    this.init()
  }
}
</script>
<style lang="stylus">
  #gridbox
    position: relative
    background:#fff
    .gdbox
      background: #fe5722
      width: 70px
      height: 70px
      border: 5px solid #f5f5f5
      border-radius: 50%
      position: absolute
      top: 50%
      left: 50%
      margin: -40px 0 0 -40px
      color: #fff
      font-size: 14px
      line-height: 70px
      text-align: center
    .weui-grid__icon
      width:89px
      height:50px
      margin-bottom:5px
    .weui-grid__label
      font-size: 18px
</style>
<style lang="stylus" scoped>
  #topbar
    position: fixed
    top: 0
    width: 100%
    height: 40px
    z-index: 2
    .topfixed
      position: fixed
      top: 0
      background:rgba(0,0,0,0.3)
      width: 100%
      height: 40px
      z-index: 2
    .logo
      float:left
      img
        width:46%
        z-index: 3
        position: relative
        margin: 5px 0 0 10px
    .tel
      float:right
      img
        width:50%
        display: block
        position: relative
        margin:5px auto 0
        z-index: 3
  .listbox
    background: #fff
    overflow: hidden
    border-bottom: 10px solid #eee
    padding:5px 0 10px
    p
      font-size: 14px
      color: #666
      text-align: center
      line-height: 32px
      font-weight: bold
      span
        color:#fe5722  
</style>
