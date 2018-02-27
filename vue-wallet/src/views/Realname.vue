<template>
  <div style="width:100%;height:100%;">
    <x-header :left-options="{backText: ''}" title="实名认证"></x-header>
    <step v-model="step" class="step">
      <step-item title="实名认证"></step-item>
      <step-item title="提交申请"></step-item>
      <step-item title="系统审核"></step-item>
    </step>
    <group class="group" label-align="right" label-width="7.0em">
      <x-input :required="true" ref="name" placeholder="请输入真实姓名" v-model="name"></x-input>
      <x-input :required="true" class="vux-1px-b" placeholder="请输入身份证号" ref="idNum" v-model="idNum"></x-input>
      <x-button type="primary" class="login" @click.native="submitfn">确定</x-button>
    </group>
  </div>
</template>

<script>
import { XHeader, Group, XInput, XButton, Step, StepItem } from 'vux'
import { identityCodeValid } from '../common/js/util'

export default {
  data () {
    return {
      step: 0,
      name: '',
      idNum: ''
    }
  },
  components: {
    XHeader,
    Group,
    XInput,
    XButton,
    Step,
    StepItem
  },
  methods: {
    submitfn () {
      let vue = this
      if (!this.name) {
        vue.prop({text: '姓名不能为空'})
        return
      }
      if (!vue.idNum) {
        vue.prop({text: '身份证号不能为空'})
        return
      } else {
        var res = identityCodeValid(vue.idNum)
        if (!res) {
          vue.prop({text: '身份证格式不正确'})
          return
        }
      }
      this.put({
        url: 'rest/customer/v1/update',
        data: {
          'id': localStorage.getItem('walletid'),
          'idNo': vue.idNum,
          'mobile': localStorage.getItem('wallettel'),
          'name': vue.name
        },
        success: function (data) {
          if (data.code === 200) {
            vue.$router.push({path: '/infoperfect'})
          }
        }
      })
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
      margin:45px auto 30px
  .step
    padding:15px
    background:#fff;
</style>
