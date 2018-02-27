<template>
  <div>
    <x-header :left-options="{backText: ''}" title="上传车辆信息">
      <a href="tel:4000621043" slot="right"><span class="icon-phone"></span></a>
    </x-header>
    <div class="failbox vux-1px-tb">该车辆可能未曾在您选择的投保城市人、太、平三大保司投保，需要您上传该车辆证件信息。</div>
    <div class="carSign vux-1px-tb">京pb8392</div>
    <div class="xszbox vux-1px-tb">
      <div class="xsztit">上传行驶证照片<span>(*按照示例图上传)</span></div>
      <div class="xszmain">
        <div class="xzsside">
          <img :src="xsz1">
          <vue-core-image-upload
            class="btn fileimg"
            @click.native="imgcli"
            :crop="false"
            @imagechanged="imagechanged"
            :isXhr="false"
            text=""
            :max-file-size="5242880"
            :headers="{'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'}"
          >
          </vue-core-image-upload>
        </div>
        <div class="xzsside">
          <img :src="xsz2">
          <vue-core-image-upload
            class="btn fileimg"
            @click.native="imgcli"
            :crop="false"
            @imagechanged="imagechanged"
            :isXhr="false"
            text=""
            :max-file-size="5242880"
            :headers="{'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'}"
          >
          </vue-core-image-upload>
        </div>         
      </div>
    </div>
    <div class="xszbox vux-1px-tb">
      <div class="xsztit mar_b_10">被保险人信息</div>
      <x-input required  placeholder="请输入被保险人" v-model="carOwnerName">
        <span class="red" slot="label">*</span>
      </x-input>
      <x-input required  placeholder="请输入被保险人身份证号" v-model="idNo">
        <span class="red" slot="label">*</span>
      </x-input>
      <div class="xsztit">身份证正、反面照片<span>(*按照示例图上传)</span></div>
      <div class="xszmain">
        <div class="xzsside">
          <img :src="xsz1">
          <vue-core-image-upload
            class="btn fileimg"
            @click.native="imgcli"
            :crop="false"
            @imagechanged="imagechanged"
            :isXhr="false"
            text=""
            :max-file-size="5242880"
            :headers="{'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'}"
          >
          </vue-core-image-upload>
        </div>
        <div class="xzsside">
          <img :src="sfz2">
          <vue-core-image-upload
            class="btn fileimg"
            @click.native="imgcli"
            :crop="false"
            @imagechanged="imagechanged"
            :isXhr="false"
            text=""
            :max-file-size="5242880"
            :headers="{'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'}"
          >
          </vue-core-image-upload>
        </div>         
      </div>
    </div>
    <x-button class="center" type="primary" @click.native="licenseSubmit">下一步</x-button>
    <p class="tip">说明：提交的以上投保信息，将视同车主授权平台可使用该信息为车主办理车险业务。</p>
  </div>
</template>

<script>
import VueCoreImageUpload from 'vue-core-image-upload'
import { XHeader, Group, XButton, XInput } from 'vux'
import {serverUrlName} from '../common/js/util'

export default {
  data () {
    return {
      image: '',
      xsz1: require('common/images/xsz1.png'),
      xsz2: require('common/images/xsz2.png'),
      sfz1: require('common/images/card1.png'),
      sfz2: require('common/images/card2.png'),
      temp: '',
      carOwnerName: '',
      idNo: ''
    }
  },
  components: {
    XHeader,
    Group,
    XButton,
    XInput,
    'vue-core-image-upload': VueCoreImageUpload
  },
  methods: {
    imagechanged (res) {
      const reader = new FileReader()
      let self = this
      reader.onload = function (e) {
        const src = e.target.result
        self.image = src
        self[self.temp] = src
        self.upload(self.temp)
      }
      reader.readAsDataURL(res)
    },
    imgcli (event) {
      let tem = event.path[2].id
      this.temp = tem
    },
    upload (dom) {
      let vue = this
      let time = new Date().getFullYear() + '' + new Date().getTime() + '.jpg'
      vue.post({
        url: 'baoping-api/api/upload/uploadImg',
        data: {
          'base64': vue.image,
          'type': 'image/jpeg',
          'pictureName': time,
          'bussinessType': 2
        },
        success: function (data) {
          if (data.code === '0') {
            vue[dom] = serverUrlName + data.url
          } else {
            vue.prop({text: data.message})
          }
        }
      })
    }
  }
}
</script>
<style lang="stylus">

</style>
<style lang="stylus" scoped type="text/css">
  .failbox
    margin:15px auto
    background:#e8eaf6 url(../common/images/horn.png) no-repeat 15px 18px
    padding:15px 15px 15px 40px
    font-size:16px
    line-height:26px
    background-size:20px auto
  .carSign
    background:#fff
    text-align: center
    color: #fe5722
    font-size: 24px
    height: 45px
    line-height: 45px
  .xszbox
    background: #fff
    margin: 15px 0 0px
    padding: 15px
    .xsztit
      font-size: 18px
      color: #1b1b1b
      &.mar_b_10
        margin-bottom:10px
      span
        color: #989898
        font-size: 12px
    .xszmain
      margin-top: 20px
      width: 100%
      display: -webkit-box
      justify-content: space-around
      .xzsside
        position: relative
        flex:1 1 auto
        text-align: center
        img
          width:96%
        .fileimg
          position: absolute
          left: 0
          height: 100%
          top: 5px
          opacity: 0.1
          width: 100%
          z-index: 10
  .red
    color:#c62c2c
    font-size: 18px
    margin-right: 10px
  .center
    width:80%
    margin:25px auto
  .tip
    background: #f0f2f7
    border: 1px solid #ededed
    padding: 10px
    margin: 0 auto 15px
    width: 90%
    font-size: 16px
    border-radius: 6px
</style>
