<template>
  <div style="width:100%;height:100%;">
    <x-header :left-options="{backText: ''}" title="快速申请"></x-header>
    <swiper :list="baseList" auto loop></swiper>
    <group class="group" label-align="right" label-width="5.5em">
      <x-input type="number" title="申请金额：" :min="1" :max="10000" :required="true" placeholder="请输入申请金额" v-model="num" ref="textNum"></x-input>
      <selector title="贷款期限：" :options="[{key: '3', value: '3个月'},{key: '6', value: '6个月'},{key: '9', value: '9个月'},{key: '12', value: '12个月'}]" v-model="deadline"></selector>
      <x-input title="手机号：" readonly :value="borrow" v-show="isShow">
        <x-button slot="right" :link="{path:'/login'}" type="primary" mini><span class="icon-pencil"></span></x-button>
        <!-- <router-link to="/login"><span slot="right" class="icon-pencil"></span></router-link> -->
      </x-input>
      <x-input is-type="china-mobile" title="手机号：" ref="texInput" :required="true" placeholder="请输入手机号" v-model="tel" v-show="!isShow"></x-input>
      <x-input placeholder="请输入验证码" title="验证码：" v-model="verifi" ref="textverify" v-show="!isShow">
        <x-button slot="right" type="primary" mini @click.native="verifyFn" :disabled="disabled" :text="verifiText"></x-button>
      </x-input>
      <check-icon class="checkbox" v-show="!isShow" :value.sync="check">我同意《<span @click.prevent="showService()"><a href="javascript:">用户服务协议</a></span>》和《<span @click.prevent="showService()"><a href="javascript:">借入者协议</a></span>》</check-icon>
      <x-button type="primary" class="login" @click.native="login">提交申请</x-button>
    </group>
    <div v-transfer-dom>
      <popup v-model="protocol" position="right" width="100%">
        <div class="position-horizontal-demo">
          服务协议内容如下：
          <span class="vux-close" @click="protocol = false"></span>
        </div>
      </popup>
    </div>
    <tabbar :eq="eq"></tabbar>
  </div>
</template>

<script>
import { XHeader, Swiper, Group, Icon, XInput, XButton, Selector, CheckIcon, Popup, TransferDom } from 'vux'
import Tabbar from 'components/Tabbar'
import store from '../store'
import '../common/style/fonts.css'

const baseList = [
  {
    url: '',
    img: require('../common/images/1.jpg'),
    title: '送你一朵fua'
  }, {
    url: '',
    img: require('../common/images/2.jpg'),
    title: '送你一辆车'
  }, {
    url: '',
    img: require('../common/images/3.jpg'),
    title: '送你一次旅行'
  }
]

export default {
  directives: {
    TransferDom
  },
  data () {
    return {
      baseList: baseList,
      deadline: '3',
      num: '',
      borrow: localStorage.getItem('wallettel') || '',
      eq: 0,
      tel: '',
      verifi: '',
      check: true,
      protocol: false,
      disabled: false,
      verifiText: '发送验证码'
    }
  },
  computed: {
    isShow () {
      if (this.borrow) {
        return true
      } else {
        return false
      }
    }
  },
  components: {
    XHeader,
    Swiper,
    Group,
    Icon,
    XInput,
    XButton,
    Selector,
    CheckIcon,
    Popup,
    TransferDom,
    Tabbar
  },
  methods: {
    showService () {
      this.check = true
      this.protocol = true
    },
    login () {
      let vue = this
      if (!this.num) {
        vue.prop({text: '请输入申请金额'})
        this.$refs.textNum.focus()
        return
      } else if (this.num > 10000) {
        vue.prop({text: '金额不能超过1万'})
        this.$refs.textNum.focus()
        return
      } else if (parseInt(this.num) === 0) {
        vue.prop({text: '金额不能为0'})
        this.$refs.textNum.focus()
        return
      }
      if (this.isShow) {
        store.commit('updateApplyNum', {applyNum: vue.num})
        store.commit('updateDeadline', {deadline: vue.deadline})
        if (localStorage.getItem('profile')) {
          vue.$router.push({path: '/infoperfect'})
        } else {
          vue.$router.push({path: '/realname'})
        }
      } else {
        if (!this.tel) {
          vue.prop({text: '请输入手机号'})
          this.$refs.texInput.focus()
        } else if (!this.verifi) {
          vue.prop({text: '请输入验证码!'})
          this.$refs.textverify.focus()
          return
        } else if (/^(0|86|17951)?(13[0-9]|15[012356789]|17[05678]|18[0-9]|14[57])[0-9]{8}$/.test(this.tel)) {
          vue.post({
            url: 'rest/customer/v1/register',
            data: {'mobile': vue.tel, 'smscode': vue.verifi},
            success: function (data) {
              if (data.code === 200 || data.code === 409) {
                localStorage.setItem('wallettel', vue.tel)
                localStorage.setItem('walletid', data.id)
                localStorage.setItem('profile', data.profileIsComplete)
                store.commit('updateApplyNum', {applyNum: vue.num})
                store.commit('updateDeadline', {deadline: vue.deadline})
                if (localStorage.getItem('profile')) {
                  vue.$router.push({path: '/infoperfect'})
                } else {
                  vue.$router.push({path: '/realname'})
                }
              } else {
                vue.prop({text: data.msg})
              }
            }
          })
        } else {
          vue.prop({text: '手机号格式不正确'})
          this.$refs.texInput.focus()
        }
      }
    },
    verifyFn () {
      let vue = this
      if (!vue.tel) {
        vue.prop({text: '请输入手机号!'})
        vue.$refs.texInput.focus()
      } else if (/^(0|86|17951)?(13[0-9]|15[012356789]|17[05678]|18[0-9]|14[57])[0-9]{8}$/.test(this.tel)) {
        vue.get({
          url: `rest/customer/v1/fetchMsgCode/${this.tel}/0`,
          success: function (data) {
            if (data.code === 200) {
              vue.prop({text: '验证码已发送，请注意查收!'})
              vue.disabled = true
              let i = data.msg
              let timer = setInterval(function () {
                i--
                if (i <= 0) {
                  clearInterval(timer)
                  vue.verifiText = '发送验证码'
                  vue.disabled = false
                } else {
                  vue.verifiText = `${i} s重新获取`
                }
              }, 1000)
            }
          }
        })
      } else {
        vue.prop({text: '手机号格式不正确!'})
        vue.$refs.texInput.focus()
      }
    }
  },
  activated: function () {
    this.eq = 0
    this.borrow = localStorage.getItem('wallettel') || ''
  },
  deactivated: function () {
    this.eq = null
  }
}
</script>
<style type="stylus">
  .weui-tabbar
    position:fixed
</style>
<style lang="stylus" scoped>
  .vux-slider
    margin:0px auto 0px
  .group
    width:94%
    margin:0 auto
    .login
      width:70%
      margin:15px auto 30px
  button.weui-btn_mini
    padding:0 0.5em
  .checkbox
    margin:15px 5px 10px 10px
    font-size:14px
    width: 100%
    .weui-icon-success,.weui-icon-circle
      font-size:16px
  .position-horizontal-demo
    position: relative
    height: 100%
    .vux-close
      position: absolute
      top: 70%
      left: 50%
      transform: translateX(-50%) translateY(-50%) scale(4)
      color: rgba(0,0,0,0.6)
  .vux-close:before, .vux-close:after
    width:5px
</style>
