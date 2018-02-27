<template>
  <div>
    <x-header :left-options="{backText: ''}" title="登录"></x-header>
    <group class="group">
      <x-input is-type="china-mobile" ref="texInput" :required="true" placeholder="请输入手机号" v-model.trim="tel"></x-input>
      <x-input placeholder="请输入验证码" ref="textverify" v-model="verifi">
        <x-button slot="right" type="primary" mini @click.native="verifyFn" :disabled="disabled" :text="verifiText"></x-button>
      </x-input>
      <check-icon class="checkbox" :value.sync="check">我同意《<span @click.prevent="showService()"><a href="javascript:">用户服务协议</a></span>》和《<span @click.prevent="showService()"><a href="javascript:">借入者协议</a></span>》</check-icon>
      <x-button type="primary" class="login" @click.native="login">登录</x-button>
    </group>
    <div v-transfer-dom>
      <popup v-model="protocol" position="right" width="100%">
        <div class="position-horizontal-demo">
          服务协议内容如下：
          <span class="vux-close" @click="protocol = false"></span>
        </div>
      </popup>
    </div>
  </div>
</template>

<script>
import { XHeader, Group, XInput, XButton, CheckIcon, Popup, TransferDom } from 'vux'

export default {
  directives: {
    TransferDom
  },
  data () {
    return {
      tel: '',
      verifi: '',
      check: true,
      protocol: false,
      disabled: false,
      verifiText: '发送验证码'
    }
  },
  components: {
    XHeader,
    Group,
    XInput,
    XButton,
    CheckIcon,
    Popup,
    TransferDom
  },
  methods: {
    showService () {
      this.check = true
      this.protocol = true
    },
    login () {
      let vue = this
      if (!this.tel) {
        vue.prop({text: '请输入手机号!'})
        vue.$refs.texInput.focus()
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
              vue.$router.push({path: '/'})
            }
          }
        })
      } else {
        vue.prop({text: '手机号格式不正确!'})
        this.$refs.texInput.focus()
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
  }
}
</script>

<style lang="stylus" scoped>
  .group
    width:94%
    margin:0 auto
    .login
      width:70%
      margin:15px auto 30px
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
