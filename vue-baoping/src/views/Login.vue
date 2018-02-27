<template>
  <div>
    <x-header :left-options="{backText: ''}" title="登录"></x-header>
    <group class="group">
      <x-input is-type="china-mobile" ref="texInput" :required="true" placeholder="手机号作为用户名使用" v-model.trim="tel"></x-input>
      <x-input placeholder="请输入验证码" ref="textverify" v-model="verifi">
        <x-button slot="right" type="primary" mini @click.native="verifyFn" :disabled="disabled" :text="verifiText"></x-button>
      </x-input>
      <check-icon class="checkbox" :value.sync="check">登录即视为同意<span @click.prevent="showService()"><a href="javascript:">《保评用户服务条款》</a></span></check-icon>
      <x-button type="primary" class="login" @click.native="login">登录</x-button>
      <p id="shenqing" class="tc mar_b_10">还不是合作伙伴？请<a href="javascript:void(0);" onclick="location.href='partner.html?wid='+ localStorage.getItem('cache_wid')" class="blue">点击这里</a>申请<br>(目前仅支持北京，广东，浙江地区)</p>
    </group>
    <div v-transfer-dom>
      <popup v-model="protocol" position="right" width="100%">
        <div class="position-horizontal-demo protocol">
          <p class="title">保评如意宝用户注册及使用服务协议</p>
          <p>尊敬的用户，欢迎您使用“保评如意宝”软件（以下简称“保评如意宝”或“本软件”）及服务！</p>
          <p>使用本软件前，请认真阅读并充分理解《保评如意宝服务使用协议》（以下简称“本协议”）。用户的下载、注册、登录和使用等行为将视为已接受本协议所有条款及其约束。保评如意宝的各项服务的所有权和运营权归北京保评科技有限公司（以下简称“保评科技”）所有。</p>
          <p>保评科技在此特别提醒用户：请仔细阅读本协议中的各个条款，包括但不限于加黑体字条款、免除或者限制保评科技责任的条款、对用户权利进行限制的条款以及约定争议解决方式、司法管辖的条款。</p>
            <h2>一、软件安装及注册</h2>
            <p>1、用户可以直接在微信中通过关注微信公众号：保评如意宝，经过在线注册、线下业务人员开通服务后即可使用。用户在满足保评公司对用户提出的活跃度要求的前提下免费使用本软件，如果用户活跃度达不到要求，则需按月支付软件服务费（具体要求，线下业务人员在开通服务时会说明）。为了保证本软件及服务的安全性和功能的一致性，保评科技有权不经向用户特别通知，而对本软件做不定期更新, 或者对软件的部分功能效果进行改变或限制。</p>
            <p>2、鉴于"保评如意宝"的注册方式,用户注册时即默认将其手机号码等信息进行账号绑定。</p>
            <h2>二、使用须知</h2>
            <p>1、基于保评如意宝所提供服务的重要性，用户在使用本服务时需注意:</p>
            <p>（1）及时更新个人资料，应符合及时、详尽、准确的要求。</p>
            <p>（2）应符合有关的法律法规要求;</p>
            <p>（3）应符合相关政府主管部门的要求。</p>
            <p>2、保评如意宝提供车险算价、在线投保、会员商品、理赔服务等功能，需要搜集用户的相关信息以便提供更好的使用体验。所收集信息可能涉及注册用户手机号码及拍照上传的行驶本、被保险人身份证等、暂住证等信息。用户已了解收集、使用及拍照上传的相关信息的目的、方式和范围, 并同意保评如意宝取得和使用其信息并提供相应服务。因产品服务与实际使用功能相关联, 若用户提供的信息不完整、不真实，则可能在使用过程中受限或无法使用部分功能。</p>
            <p>3、用户使用保评如意宝即视为理解并同意以下条款:</p>
            <p>（1）用户授权保评科技, 将提供给保评如意宝的信息、享受相关服务产生的信息以及保评如意宝根据服务内容查询、收集的信息，用于保评科技及其因服务必要委托的合作伙伴为用户本人提供服务、推荐产品、开展市场调查与信息数据分析。</p>
            <p>（2）用户本人授权保评科技, 除法律另有规定之外, 基于为本人提供更优质服务和产品的目的，向保评科技及其因服务必要开展合作的合作伙伴查询、收集、提供本人的信息。为确保用户本人信息的安全，保评科技及其合作伙伴对上述信息负有保密义务，并采取各种措施保证信息安全。</p>
            <p>4、用户有责任妥善保管注册账户信息及账户密码的安全，用户需要对注册账户以及密码下的行为承担法律责任。用户同意在任何情况下不向他人透露账户及密码信息。</p>
            <p>5、用户需为自己注册账户下的一切行为负责，包括用户所进行的相关操作以及由此产生的任何后果。用户应对本服务中的内容加以判断, 并承担因使用内容而引起的所有风险，包括但不限于因对内容的正确性、完整性或实用性的依赖而产生的风险。保评科技无法且不会对因前述风险而导致的任何损失或损害承担责任。</p>
            <p>6、用户有义务遵守法律法规、政策、道德、保评如意宝各项规则，不将保评如意宝用于任何非法目的，也不以任何非法方式使用保评如意宝所提供的服务。用户必须遵守以下原则:</p>
            <p>（1）遵守中国有关法律和法规;</p>
            <p>（2）遵守所有使用网络服务的网络协议、规定、程序和惯例;</p>
            <p>（3）不得为任何非法目的而使用网络服务系统;</p>
            <p>（4）不得传输任何骚扰性的、中伤他人的、辱骂性的、恐吓性的、庸俗的、淫秽的、教唆他人实施犯罪行为等非法的信息资料;</p>
            <p>（5）不得侵犯其他任何第三方的专利权、著作权、商标权、名誉权或其他任何合法权益;</p>
            <p>（6）不干扰或混乱网络服务;</p>
            <p>（7）不从事任何法律、行政法规禁止的行为。</p>
            <p>7、如因本软件使用的第三方软件或技术引发的任何纠纷，应由该第三方负责解决, 保评如意宝不承担任何责任。保评如意宝不对第三方软件或技术提客服支持，若用户需要获取支持，请与第三方联系。</p>
            <h2>三、用户隐私</h2>
            <p>1、保评如意宝拥有完善的信息管理安全制度,为保障用户个人信息的安全, 对重要用户信息采用了专业的加密存储与传输方式，以免用户信息遭受未经授权的访问、使用或披露。对于用户的相关信息，保评如意宝将遵循相关法律的规定对其进行隐私保护。</p>
            <p>2、用户应妥善保管注册的用户名称、密码等信息以及用户的其他信息，所有使用该信息所发生的行为以及使用用户手机上的保评如意宝的行为均视为用户作出的，并由用户承担全部责任。因用户保管、设置、使用不当等造成的损失和责任, 由用户自行承担。</p>
            <h2>四、软件及服务知识产权</h2>
            <p>1、保评科技对本软件及其相关信息享有全部知识产权，包括但不限于：编码、商标、服务标志、商号、图形、美术品、照片、肖像、文字内容、音频片断、按钮图标以及计算机软件、标识、数码下载、数据汇编等。以上都是保评科技或其内容提供者的财产，受到中华人民共和国著作权法、商标法、专利法等相关法律法规的保护。用户对其仅享有本协议约定范围内的临时的、可撤销的非专有使用权。</p> 
            <p>2、用户仅在符合本软件使用目的的前提下被许可浏览和使用本软件，即：以个人名义浏览信息和购买供个人使用商品或服务的目的。其他方式的使用都是被严格禁止的，包括但不限于以下方式：复制、修改、销售、传送、再版、删除、添加、展览、记入或演示本软件的内容或以其他方式部分地或整体地非法使用本软件的内容，但经保评科技允许将本软件当中的资讯转发至微信朋友圈等第三方媒体的除外。</p> 
            <h2>五、法律责任及免责</h2>
            <p>1、保评如意宝所提供的车险算价、在线投保、会员商品、理赔服务等功能，用户应根据自己的情况分析考虑，在购买过程中谨慎挑选。由于目前信息的不完全对称性, 所提供服务信息可能存在实时性有限等问题，保评如意宝不保证提供的所有数据信息完全正确。</p>
            <p>2、保评如意宝提供的服务中可能包括广告，用户同意在使用过程中显示保评如意宝和第三万供应商、合作伙伴提供的广告。除法律法规明确规定外, 用户应自行对依该广告信息进行的交易负责，对用户因依该广告信息进行的交易或前述广告商提供的内容而遭受的损失或损害，保评如意宝不承担任何责任。</p>
            <p>3、基于互联网服务的特殊性, 本软件不担保软件系统运行的持续性、及时性和/或安全性。本软件因相关状况无法正常运作, 导致用户无法使用本软件或使用本软件受到任何影响时, 保评科技对用户或第三方不负任何责任。前述状况包括但不限于: </p>
            <p>（1）本软件系统停机维护期间；</p>
            <p>（2）电信设备出现故障不能进行数据传输的；</p>
            <p>（3）由于黑客攻击、网络供应商技术调整或故障、软件升级、银行方面的问题等原因而造成的本软件中断或延迟。</p>
            <p>4、在任何情况下, 因第三方行为或原因而导致的有关损失或责任，应由该第三方承担, 保评科技不承担任何责任，前述状况包括但不限于：</p>
            <p>（1）第三方通过本软件发布诈骗或虚假信息，或者发表有谩骂、诅咒、诋毁、攻击内容的，或者含有淫秽、色情、下流、反动、煽动民族仇恨等让人反感、厌恶内容的非法言论的；</p>
            <p>（2）第三方通过本软件发布一些侵犯用户知识产权、肖像权、姓名权、名誉权、隐私权和/或其他合法权益的图片、照片、文字等资料的。</p>
            <p>5、因用户自身的原因导致的任何损失或责任, 由用户自行负责, 保评科技不承担责任。该等情形包括但不限于: </p>
            <p>（1）因用户使用的银行卡的原因导致的损失或责任, 包括但不限于：用户使用未经认证的银行卡或使用非用户本人的银行卡或信用卡, 用户的银行卡被冻结、挂失等导致的任何损失或责任; </p>
            <p>（2）因用户的操作不当、遗忘或泄露密码、密码被他人破解、用户使用的移动终端被第三方侵入而造成的损失；</p>
            <p>（3）其他因用户的原因导致的任何损失或责任。</p>
            <h2>六、通知和送达</h2>
            <p>1、本软件可通过软件平台公告、电子邮件、手机短信、无线通讯装置等电子方式或常规的信件传递等方式进行本协议项下的通知。用户的通讯地址和联系方式为用户在本软件上所登记的最新的联系方式。用户应在本软件上维持并更新用户的通讯地址和联系方式, 确保其为真实、最新、有效及完整。若用户提供任何错误、虚假、过时或不完整的通讯地址和联系方式, 由此产生的任何直接或间接的任何支出或损失用户自行承担。</p>
            <p>2、通过软件平台公告、电子邮件、手机短信、无线通讯装置等电子方式进行本协议项下通知的，该等通知于本软件发送之时为有效送达; 专人递送通知的, 在专人递送的交付日为有效送达; 以挂号信(付清邮资)通知的, 在寄出(以邮戳为凭)后的第4日为有效送达; 以特快专递(付清邮资)通知的, 在寄出(以邮戳为凭)后的第3日为有效送达; 以传真通知的, 在传真发出时视为送达。</p>
            <h2>七、其他</h2>
            <p>1、本协议包括但不限于本协议内容及本软件已经发布的或将来可能发布的各类规则。本协议内容和所有规则为协议不可分割的组成部分, 具有同等法律效力。</p>
            <p>2、未经保评科技书面同意，用户不得全部或部分转让或以其他方式转让用户在本协议项下的权利和义务。</p>
            <p>3、本协议的订立、效力、解释、履行及争议的解决均适用中华人民共和国法律。</p>
            <p>4、凡由本协议引起的或与本协议有关的争议和纠纷, 双方应优先协商解决。不能协商或协商不能达成一致的, 均应提交保评科技所在地有管辖权的人民法院诉讼解决。</p>
            <p>5、本协议最终解释权归保评科技所有。</p>
          <span class="vux-close" @click="protocol = false"></span>
        </div>
      </popup>
    </div>
  </div>
</template>

<script>
import { XHeader, Group, XInput, XButton, CheckIcon, Popup, TransferDom } from 'vux'
import {isWeixin} from '../common/js/util'

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
      this.protocol = true
    },
    login () {
      let vue = this
      if (!this.tel) {
        vue.prop({text: '请输入手机号!'})
        this.$refs.texInput.focus()
      } else if (!this.verifi) {
        vue.prop({text: '请输入验证码!'})
        this.$refs.textverify.focus()
        return
      } else if (/^(0|86|17951)?(13[0-9]|15[012356789]|17[05678]|18[0-9]|14[57])[0-9]{8}$/.test(this.tel)) {
        let wxApid = ''
        if (isWeixin()) {
          let myurl = vue.$route.query.wid
          wxApid = '&wxApid=' + myurl
        }
        vue.post({
          url: 'baoping-api/api/agency/center/agencyLogin',
          data: {
            'telephone': vue.tel,
            'captcha': vue.verifi,
            'password': '000000',
            'email': '',
            'name': '',
            'city': '',
            'wxApid': wxApid
          },
          success: function (data) {
            if (data.code === '0') {
              localStorage.setItem('proxy_uid', data.uid)
              if (isWeixin()) {
                localStorage.setItem('wid', data.wid)
              } else {
                localStorage.setItem('wid', '0909')
              }
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
        vue.post({
          url: 'baoping-api/api/customer/sendCaptcha',
          data: {
            'mobile': vue.tel,
            'bizType': '0'
          },
          success: function (data) {
            if (data.code === '0') {
              vue.prop({text: '验证码已发送，请注意查收!'})
              vue.disabled = true
              let i = data.timeouts
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
    .weui-btn_mini[disable=true]
      background:#ccc
  .position-horizontal-demo
    position: relative
    height: 100%
    .vux-close
      position: fixed
      top: 17px      
      left: 35px
      height:15px
      width:15px
      transform: translateX(-50%) translateY(-50%) scale(4)
      color: rgba(0,0,0,0.6)
  .vux-close:before, .vux-close:after
    width:5px
    color:red
.protocol
  p
    text-indent:15px
    font-size: 14px
    color:#151515
    line-height:24px
  h2
    font-size:16px
    font-weight:bold
    margin:20px 0 0
    color:#151515
    line-height:24px
  .title
    font-size:18px
    font-weight:bold
    margin:20px 0
    text-align:center
.mar_b_10
  margin-bottom:10px
  font-size:12px
</style>
