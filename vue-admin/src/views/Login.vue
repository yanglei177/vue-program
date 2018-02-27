<template>
  <div class="loginbox">
    <h2>车险信息管理平台</h2>
    <div class="login">
      <h2>登录</h2>
      <form class="form-horizontal" id="signupForm">
      <div class="form-group">
        <label for="username" class="col-sm-3">手机号：</label>
        <div class="col-sm-6">
          <div class="input-group">
            <span class="input-group-addon"><i class="icon icon-user"></i></span>
            <input type="tel" v-model="loginName" class="form-control" id="username" name="username"
                   placeholder="请输入您的手机号">
          </div>
        </div>
        <div class="col-sm-3">&nbsp;</div>
      </div>
      <div class="form-group hide" id="yzm">
        <label for="password" class="col-sm-3">验证码：</label>
        <div class="col-sm-6">
          <div class="input-group">
            <span class="input-group-addon"><i class="icon icon-shield"></i></span>
            <input type="password" class="form-control" id="veritext" name="password" placeholder="请输入验证码">
            <input type="button" value="获取验证码" class="btn-primary btn" id="veribtn" name="">
          </div>
        </div>
        <div class="col-sm-3">&nbsp;</div>
      </div>
      <div class="form-group">
        <label for="password" class="col-sm-3">密码：</label>
        <div class="col-sm-6">
          <div class="input-group">
            <span class="input-group-addon"><i class="icon icon-lock"></i></span>
            <input type="password" v-model="password" class="form-control" id="password" name="password"
                   placeholder="请输入您的密码">
          </div>
        </div>
        <div class="col-sm-3">&nbsp;</div>
      </div>
      <div class="form-group">
        <div class="col-sm-3">&nbsp;</div>
        <div class="col-sm-6 text-right"><a href="javascript:void(0)" id="forgot">忘记密码？</a></div>
        <div class="col-sm-3">&nbsp;</div>
      </div>
      <div class="form-group">
        <div class="col-sm-3">&nbsp;</div>
        <div class="col-sm-6 text-center">
          <input type="button" class="login_btn" @click="login" value="立即登录" name="">
        </div>
        <div class="col-sm-3">&nbsp;</div>
      </div>
      </form>
    </div>
    <div class="tips">提示：第一次登录可通过忘记密码设置新密码进行登录</div>
  </div>
</template>

<script type="text/ecmascript-6">
  import axios from 'axios'

  export default {
    data () {
      return {
        'loginName': '',
        'password': ''
      }
    },
    methods: {
      login () {
        axios.post('http://192.168.1.103:8083/baoping-web/doLogin', {
          data: {
            'loginName': this.loginName,
            'password': this.password
          }
        }).then((res) => {
          console.log(res.data)
        })
      }
    }
  }
</script>

<style scoped rel="text/css">
  #app {
    height: 100%;
    width: 100%;
    background: url(../common/images/login_bg.jpg) no-repeat center center;
  }

  .loginbox {
    overflow: hidden;
    background: #e9e9e9 url(../common/images/bg_login.png) no-repeat center center;
    height: calc(100%);
    width: 100%;
  }

  .loginbox h2 {
    font-size: 36px;
    color: #000;
    margin: 20px 0 0 50px;
  }

  .login {
    width: 500px;
    height: 360px;
    border: 1px solid #7f7f7f;
    border-radius: 6px;
    position: absolute;
    left: 50%;
    top: 50%;
    margin: -180px 0 0 -250px;
    background: #fff;
    box-shadow: 0 5px 10px 1px rgba(102, 102, 102, 0.6);
  }

  .login h2 {
    font-size: 30px;
    color: #fe5722;
    text-align: center;
    margin: 20px 0 35px;
  }

  .tips {
    position: absolute;
    top: 50%;
    left: 50%;
    margin: 230px 0 0 -220px;
    color: #7b7877;
    font-size: 18px;
  }

  .login_btn {
    background: url(../common/images/login_btn.png) no-repeat;
    width: 197px;
    height: 69px;
    overflow: hidden;
    text-indent: -9999px;
    border: none;
  }

  .login_btn:hover, .login_btn:focus, .login_btn:active {
    background: url(../common/images/login_btn.png) no-repeat;
    box-shadow: none;
    border: none;
    outline: none;
  }

  .form-group {
    margin-bottom: 25px;
  }

  label.error {
    position: absolute;
    right: -125px;
    top: 3px;
    z-index: 10;
    width: 105px;
    text-align: left;
    color: #ff8e02;
  }

  .form-control.error:focus {
    border-color: #ff8e02;
    outline: 0;
    -webkit-box-shadow: inset 0 1px 1px rgba(253, 115, 71, .075), 0 0 8px rgba(253, 115, 71, .6);
    box-shadow: inset 0 1px 1px rgba(253, 115, 71, .075), 0 0 8px rgba(253, 115, 71, .6);
  }

  #veritext {
    width: 58%;
  }

  #veribtn {
    width: 40%;
    float: left;
    margin-left: 2%;
  }
</style>
