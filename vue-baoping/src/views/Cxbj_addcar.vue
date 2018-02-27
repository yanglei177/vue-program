<template>
  <div id="cxbjAddcar">
    <x-header :left-options="{backText: ''}" title="新增车辆信息"><a href="tel:4000621043" slot="right"><span class="icon-phone"></span></a></x-header>
    <tab :line-width=1  v-model="index" :custom-bar-width="getBarWidth">
      <tab-item selected>车牌号</tab-item>
      <tab-item>车架号、发动机号</tab-item>
    </tab>
    <swiper v-model="index" :show-dots="false" height="380px">
      <swiper-item>
        <group>
          <x-address title="" v-model="value" :list="addressData" value-text-align="center" placeholder="请选择投保城市" :hide-district="false" :raw-value="false" popup-title="请选择投保城市">
            <template slot="title" slot-scope="props">
              <img src="../common/images/tbcs.jpg" slot="title">
            </template>
          </x-address>
          <cell title="">
            <x-input v-model="carLicense" :required="true" placeholder="请输入车牌号" placeholder-align="left" text-align="left"></x-input>
            <img src="../common/images/cph.jpg" slot="icon">
            <selector v-model="city" :options="citysel" slot="after-title"></selector>
          </cell>
          <x-button class="center" type="primary" @click.native="licenseSubmit">获取车辆信息</x-button>
          <p class="tip">(获取车辆信息视同授权保评查询客户行驶证及往年投保信息。)</p>
        </group>
      </swiper-item>
      <swiper-item>
        <group>
          <x-address title="" v-model="value" :list="addressData" value-text-align="center" placeholder="请选择投保城市" :hide-district="true" :raw-value="true">
            <template slot="title" slot-scope="props">
              <img src="../common/images/tbcs.jpg" slot="title">
            </template>
          </x-address>
          <x-input v-model="carFrameNO" :required="true" placeholder="请输入车架号" placeholder-align="left" text-align="left" class="common">
            <img src="../common/images/cjh.jpg" slot="label" class="imgico">
          </x-input>
          <x-input v-model="engineNo" :required="true" placeholder="请输入发动机号" placeholder-align="left" text-align="left" class="common">
            <img src="../common/images/fdjh.jpg" slot="label" class="imgico">
          </x-input>
          <cell title="">
            <x-input v-model="carLicense" :required="true" placeholder="请输入车牌号" placeholder-align="left" text-align="left"></x-input>
            <img src="../common/images/cph.jpg" slot="icon">
            <selector v-model="city" :options="citysel" slot="after-title"></selector>
          </cell>
          <x-button class="center" type="primary" @click.native="engineSubmit">获取车辆信息</x-button>
          <p class="tip">(获取车辆信息视同授权保评查询客户行驶证及往年投保信息。)</p>
        </group>
      </swiper-item>
    </swiper> 
    <div class="drzc" @click="showPolicy"><i v-show="proI"></i>今日政策</div>
    <div class="expire" v-show="expire">
      <div class="expirebox">
        您的账户有效期还有
        <span class="dateRed">{{expireTime}}</span>天
        <a href="javascript:void(0)">马上延期</a>
      </div>
    </div>
    <div v-transfer-dom id="citytransfer">
      <popup v-model="popval" position="right" width="90%">
        <template v-for="item in addressData">
          <cell
          v-if="!item.parent"
          :title="item.name"
          is-link
          :arrow-direction="item.cityarrow ? 'up' : 'down'"
          class="vux-1px-tb"
          @click.native="cityToggle(item)"></cell>
          <p class="slide vux-1px-b" v-if="item.parent" @click="showDes(item)" :class="item.cityarrow?'animate':''">{{item.name}}</p>
        </template>
        <div class="today_text">
          <h2>{{policyH2}}</h2>
          <pre>{{policy}}</pre>
        </div>
      </popup>
    </div>   
  </div>
</template>

<script>
import { XHeader, Group, Cell, XInput, XButton, XAddress, Selector, Tab, TabItem, Swiper, SwiperItem, Popup, TransferDom, Value2nameFilter as value2name } from 'vux'
import store from '../store/'

export default {
  directives: {
    TransferDom
  },
  data () {
    return {
      index: 0,
      popval: false,
      expire: false,
      proI: false,
      policy: '',
      policyH2: '',
      toggleIndex: 0,
      expireTime: 0,
      getBarWidth: function (index) {
        return (index + 1) * 80 + 'px'
      },
      value: [],
      carLicense: '',
      city: '京',
      carFrameNO: '',
      engineNo: '',
      citysel: ['京', '浙', '粤', '沪', '津', '川', '鄂', '甘', '桂', '贵', '赣', '黑', '吉', '冀', '晋', '辽', '鲁', '蒙', '闽', '宁', '青', '黔', '琼', '陕', '苏', '皖', '湘', '新', '渝', '豫', '云', '藏'],
      addressData: []
    }
  },
  components: {
    XHeader,
    Group,
    Cell,
    XButton,
    XInput,
    Selector,
    XAddress,
    Tab,
    TabItem,
    Swiper,
    SwiperItem,
    Popup,
    TransferDom
  },
  methods: {
    engineSubmit () {
      let reqdata = {
        'carLicense': this.city + this.carLicense,
        'agencyId': localStorage.getItem('proxy_uid'),
        'insuranceCityID': this.value[1],
        'carFrameNO': this.carFrameNO,
        'engineNo': this.engineNo,
        'wid': localStorage.getItem('wid')
      }
      this.getCarInfo(reqdata)
    },
    licenseSubmit () {
      let reqdata = {
        'carLicense': this.city + this.carLicense,
        'agencyId': localStorage.getItem('proxy_uid'),
        'insuranceCityID': this.value[1],
        'wid': localStorage.getItem('wid')
      }
      this.getCarInfo(reqdata)
    },
    getCarInfo (reqData) {
      let vue = this
      vue.post({
        url: 'baoping-api/api/work/calculate/getWorkOrderReinfo',
        data: reqData,
        success: function (data) {
          if (data.code === '0' || data.code === '1') {
            let regtime = new Date(data.vo.ifqsCarPO.registrationDate)
            let time = regtime.getFullYear() + '-' + (parseInt(regtime.getMonth()) + 1) + '-' + regtime.getDate()
            let oData = {
              'license': data.vo.ifqsCarPO.licensePlateNo,
              'carOwnerName': data.vo.ifqsCarPO.carOwnerName,
              'carLabel': data.vo.ifqsCarPO.carLabel,
              'frameNo': data.vo.ifqsCarPO.frameNo,
              'engineNo': data.vo.ifqsCarPO.engineNo,
              'carOwnerIdcardNo': data.vo.ifqsCarPO.cardId,
              'registerDate': time
            }
            let ocity = {
              'insuranceCityID': vue.value,
              'license': vue.city + vue.carLicense,
              'insuranceCity': value2name(vue.value, vue.addressData)
            }
            store.commit('updateGdInfo', oData)
            localStorage.setItem('ocity', JSON.stringify(ocity))
            vue.$router.push({path: '/cxbj_comfirm'})
          } else {
            vue.prop({text: data.message, type: 'cancel', time: 5000, width: '2em'})
          }
        }
      })
    },
    getCityList () {
      let vue = this
      vue.post({
        url: 'baoping-api/api/agency/center/findInsuranceCitys',
        data: {
          'uid': localStorage.getItem('proxy_uid')
        },
        success: function (data) {
          if (data.code === '0') {
            data.vo.forEach(function (val) {
              vue.addressData.push({'name': val.name, 'value': val.provinceId, 'cityarrow': false})
              val.agencyInsuranceCityNamePoList.forEach(function (key) {
                vue.addressData.push({'name': key.cityName, 'value': key.cityId, 'parent': key.provinceId, 'cityarrow': false})
              })
            })
            if (data.expireDays <= 30) {
              vue.expire = true
              vue.expireTime = data.expireDays
            }
          } else {
            vue.prop({text: data.message})
          }
        }
      })
    },
    getPro () {
      let vue = this
      vue.post({
        url: 'baoping-api/api/agency/center/findDesByProAndCity',
        data: {
          'uid': localStorage.getItem('proxy_uid')
        },
        success: function (data) {
          if (data.code === '0') {
            let oVersion = {}
            for (let i = 0; i < data.vo.length; i++) {
              let cId = data.vo[i].cityId
              oVersion[cId] = data.vo[i].version
              for (let j = 0; j < vue.addressData.length; j++) {
                if (data.vo[i].cityId === vue.addressData[j].value) {
                  vue.addressData[j].description = data.vo[i].description || ''
                }
              }
              if (localStorage.getItem('oVersion')) {
                let verval = JSON.parse(localStorage.getItem('oVersion'))
                if (verval[cId] !== data.vo[i].version) {
                  // $('li#' + cId).append('<span class='newico'></span>')
                  vue.proI = true
                }
              }
              localStorage.setItem('oVersion', JSON.stringify(oVersion))
            }
          } else {
            vue.prop({text: data.message1})
          }
        }
      })
    },
    cityToggle (item) {
      item.cityarrow = !item.cityarrow
      this.addressData.forEach(function (val) {
        if (val.parent === item.value) {
          val.cityarrow = item.cityarrow
        }
      })
    },
    showDes (item, index) {
      this.policyH2 = `今日政策(${item.name})`
      if (item.description) {
        this.policy = item.description
      } else {
        this.policy = '暂无政策！'
      }
    },
    showPolicy () {
      this.popval = true
    }
  },
  created: function () {
    this.getCityList()
    this.getPro()
    let ocity = JSON.parse(localStorage.getItem('ocity'))
    if (ocity) {
      this.value.push(ocity.insuranceCityID[0], ocity.insuranceCityID[1])
      this.value = ['浙江省', '杭州市']
      this.city = ocity.license.slice(0, 1)
      this.carLicense = ocity.license.slice(1)
    }
  }
}
</script>
<style lang="stylus">
  #cxbjAddcar
    .weui-cell_select
      .weui-select
        padding-right:0
  #citytransfer
    .vux-popup-dialog
      background:#fff
</style>
<style lang="stylus" scoped type="text/css">
  #cxbjAddcar
    .weui-cell
      img
        width:30px
        height:30px    
    .weui-cell
    .common.weui-cell_warn
      padding:10px 0px 10px 15px
    .weui-cell_warn
      padding:10px 0px 10px 0px 
    .center
      width:80%
      margin:25px auto 0 
    .imgico
      margin-right:4.3em
    .drzc
      position: fixed
      right: 0px
      bottom: 13%
      text-align: center
      color: #353535
      font-size: 19px
      box-sizing: content-box
      background: url(../common/images/drzc.png) no-repeat
      background-size: 95px 98px
      width: 55px
      height: 83px
      padding: 8px 30px 7px 10px
      line-height: 28px
      i
        background: url(../common/images/newico.png) no-repeat
        position: absolute
        left:16px
        top:-10px
        width:42px
        height:22px
        background-size:42px auto
        display: none          
    .expire
      position:fixed
      bottom:10px
      background:#fafafa
      left:0
      z-index:10
      width:100%
      .expirebox
        width: 96%
        margin: 20px auto
        background: #fff
        border: 1px solid #dedede
        border-radius: 6px
        box-shadow: 2px 2px 1px #fafafa, -2px -2px 1px #fafafa
        padding: 10px 15px
        font-size: 18px
        line-height: 30px
        box-sizing: border-box
        .dateRed
          color: #fff
          font-size: 22px
          background: #fe5722
          padding: 5px 3px
          border-radius: 6px
          margin: 0 5px
        a
          color: #f23030
          text-decoration: underline
          float: right    
  .slide
    padding: 0 20px
    overflow: hidden
    height:45px
    line-height:45px
    background:rgba(254,87,34,0.7)
    color:#fff
    text-indent: 15px    
    max-height: 0
    transition: max-height .5s cubic-bezier(0, 1, 0, 1) -.1s
  .animate
    max-height: 9999px
    transition-timing-function: cubic-bezier(0.5, 0, 1, 0)
    transition-delay: 0s
  .tip
    font-size: 14px
    margin:10px 0
    text-align:center
  .today_text
    h2
      text-align:center
      font-size: 16px
      margin-top: 35px
    width:90%
    margin:0 auto
    p
      line-height:24px
</style>
