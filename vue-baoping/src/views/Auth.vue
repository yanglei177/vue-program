<template>
  <div></div>
</template>

<script>
// import axios from 'axios'

export default {
  created () {
    let vue = this
    vue.post({
      url: 'weixin/wxapi/redirectAuth.html',
      data: {
        redirectUrl: encodeURI('http://192.168.1.106:8060/#/login'),
        scope: 0
      },
      success: function (data) {
        if (data.code === '0') {
          location.href = data.message
        } else {
          vue.prop({text: data.message})
        }
      }
    })
  }
}
</script>
