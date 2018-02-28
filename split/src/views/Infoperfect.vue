<template>
  <div style="width:100%;height:100%;">
    <x-header :left-options="{backText: ''}" title="信息完善"></x-header>
    <step v-model="step" class="step">
      <step-item title="实名认证"></step-item>
      <step-item title="提交申请"></step-item>
      <step-item title="系统审核"></step-item>
    </step>
    <group class="perfect" label-align="right" label-width="10em">
      <selector title="贷款用途：" :options="[{key: '1', value: '购物'}, {key: '2', value: '旅游'}, {key: '3', value: '学习'}, {key: '4', value: '其他'}]" v-model="purpose"></selector>
      <x-input  title="是否有信用卡：" disabled>
        <checklist slot="right" label-position="right" required :options="[{key: '1', value: '有'}, {key: '0', value: '无'}]" v-model="creditcard" :max="1"></checklist>
      </x-input>
      <x-input  title="婚姻状况：" disabled>
        <checklist slot="right" label-position="right" required :options="[{key: '1', value: '已婚'}, {key: '0', value: '单身'}]" v-model="marriage" :max="1"></checklist>
      </x-input>
      <selector title="是否有固定资产：" :options="[{key: 'NONE', value: '无'}, {key: 'CAR', value: '有车'}, {key: 'HOUSE', value: '有房'}, {key: 'HOUSE_CAR', value: '有车有房'}]" v-model="asset"></selector>
      <x-address title="工作所在城市：" v-model="city" raw-value placeholder="请选择城市" :list="addressData" hide-district value-text-align="left"></x-address>
      <x-input title="月薪：" class="salary" ref="textsalary" :required="true" type="number" placeholder="请输入工资收入" v-model="salary"></x-input>
      <x-input  title="连续半年<br/>缴纳公积金：" disabled>
        <checklist slot="right" label-position="right" required :options="[{key: '1', value: '有'}, {key: '0', value: '无'}]" v-model="accumulation" :max="1"></checklist>
      </x-input>
      <x-input  title="连续半年<br/>缴纳社保：" disabled>
        <checklist slot="right" label-position="right" required :options="[{key: '1', value: '有'}, {key: '0', value: '无'}]" v-model="security" :max="1"></checklist>
      </x-input>
      <x-button type="primary" class="login" @click.native="submitfn">提交</x-button>
      <div v-transfer-dom>
        <alert v-model="show" @on-hide="hide" title="提交成功" content="您的申请已成功提交，系统会尽快审核，请关注个人中心。"></alert>
      </div>
    </group>
  </div>
</template>

<script>
import { XHeader, Group, XButton, XInput, Selector, XAddress, ChinaAddressV4Data, Step, StepItem, Checklist, TransferDomDirective as TransferDom, Alert } from 'vux'
import { mapState } from 'vuex'

export default {
  directives: {
    TransferDom
  },
  computed: {
    ...mapState({
      applyNum: state => state.vux.applyNum,
      deadline: state => state.vux.deadline
    })
  },
  data () {
    return {
      step: 1,
      purpose: '1',
      creditcard: ['1'],
      marriage: ['1'],
      asset: 'HOUSE_CAR',
      city: ['北京市', '市辖区'],
      salary: '5000',
      accumulation: ['1'],
      security: ['1'],
      addressData: ChinaAddressV4Data,
      show: false
    }
  },
  components: {
    XHeader,
    Group,
    XButton,
    XInput,
    Selector,
    Step,
    StepItem,
    Checklist,
    Alert,
    XAddress
  },
  methods: {
    submitfn () {
      let vue = this
      if (parseInt(vue.salary) > 50000) {
        vue.prop({text: '月薪不能高于50000'})
        vue.$refs.textsalary.focus()
        return
      } else if (parseInt(vue.salary) < 1000) {
        vue.prop({text: '月薪不能小于1000'})
        vue.$refs.textsalary.focus()
        return
      }
      vue.post({
        url: 'rest/credit/v1/save',
        data: {
          'amount': parseInt(vue.applyNum),
          'assets': 'NONE',
          'customerId': localStorage.getItem('walletid'),
          'haveContinuedFund': parseInt(vue.accumulation[0]),
          'haveContinuedInsurance': parseInt(vue.security[0]),
          'haveCreditCard': parseInt(vue.creditcard[0]),
          'married': parseInt(vue.marriage[0]),
          'monthSalary': parseInt(vue.salary),
          'term': vue.deadline,
          'purpose': vue.purpose,
          'workCity': vue.city[1],
          'workProvince': vue.city[0]
        },
        success: function (data) {
          if (data.code === 200) {
            vue.show = true
          }
        }
      })
    },
    hide () {
      this.$router.push({path: '/person'})
    }
  }
}
</script>
<style lang="stylus">
.perfect 
  .weui-cell__bd.weui-cell__primary
    flex:0
  .weui-cells_checkbox
    display: flex    
  .weui-cells:before,.vux-checklist-label-left:before,.weui-cell.weui-check_label:before
    border-top:none
  .weui-cells:after
    border-bottom:none
  .weui-check_label
    padding:10px 5px
  .weui-cells_checkbox > label > *
    flex: 0 0 35px;
    text-align: left
  .salary .weui-cell__bd.weui-cell__primary
    flex:1
  .weui-cells_checkbox .weui-cell__hd
    flex:1
    padding:0
</style>
<style lang="stylus" scoped type="text/css">
  .vux-slider
    margin:5px auto 0px
  .perfect
    width:94%
    margin:0 auto
    .login
      width:70%
      margin:45px auto 30px  
  .step
    padding:15px
    background:#fff;    
</style>
