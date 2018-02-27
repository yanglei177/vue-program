<template>
  <div>
    <x-header :left-options="{backText: ''}" title="确认车辆信息">
      <a href="tel:4000621043" slot="right"><span class="icon-phone"></span></a>
    </x-header>
    <div class="confirm">
      <h2>{{gdInfo.license}}</h2>
      <div class="content">
        <ul>
          <li>
            <div class="flbox">车主：</div>
            <div class="rigbox">{{gdInfo.carOwnerName}}</div>
          </li>
          <li>
            <div class="flbox">品牌：</div>
            <div class="rigbox">{{gdInfo.carLabel}}</div>
          </li>
          <li>
            <div class="flbox">车架号：</div>
            <div class="rigbox">{{gdInfo.frameNo}}</div>
          </li>
          <li>
            <div class="flbox">发动机号：</div>
            <div class="rigbox">{{gdInfo.engineNo}}</div>
          </li>
          <li>
            <div class="flbox">注册日期：</div>
            <div class="rigbox">{{gdInfo.registerDate}}</div>
          </li>
        </ul>
        <group>
          <cell is-link link="uploadCar">
            <span class="checkP" slot="title">请核对车型，如果有误请点击修改</span>
          </cell>
        </group>
      </div>
    </div>
    <group>
      <div class="getlast vux-1px-tb">
        <cell is-link link="cxbj_safeguard">
          <span  slot="title">获取上年投保信息</span>
        </cell>
      </div>
    </group>
  </div>
</template>

<script>
import { XHeader, Group, Cell } from 'vux'
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState({
      gdInfo: state => state.vux.gdInfo
    })
  },
  data () {
    return {}
  },
  components: {
    XHeader,
    Group,
    Cell
  },
  methods: {},
  created: function () {
    if (!this.gdInfo.hasOwnProperty('license')) {
      this.$router.push({path: '/cxbj_addcar'})
    }
  }
}
</script>
<style lang="stylus">

</style>
<style lang="stylus" scoped type="text/css">
  .confirm
    margin:15px auto
    border-top:1px solid #dedede
    border-bottom: 1px solid #dedede
    background:#fff
    h2
      border-bottom: 1px solid #dedede
      height: 45px
      line-height: 45px
      color:#d96118
      font-size:24px
      text-align: center
    .content
      padding:20px 5px
      overflow:hidden      
      ul
        li
          padding:0 10px
          height:30px
          line-height:30px
          background:#fff
          &:last-child,&:last-child
            border-bottom:none
          .flbox,.rigbox
            float: left
            display: inline-block
            width:28%
            text-align: right
            color: #aaa
            font-size:16px
            height: 30px
            overflow: hidden
            text-overflow: ellipsis
            white-space: nowrap
          .rigbox
            width:72%
            text-align: left
            padding-left:5%
            box-sizing: border-box
      .checkP
        color: #fe5722
        font-size: 14px
        margin: 10px
        line-height: 30px
  .getlast
    color:#171717
    padding: 10px 0
</style>
