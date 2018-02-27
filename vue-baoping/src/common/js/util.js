import Vue from 'vue'
import {AjaxPlugin, LoadingPlugin, ToastPlugin, AlertPlugin} from 'vux'
import qs from 'qs'

Vue.use(AjaxPlugin)
Vue.use(LoadingPlugin)
Vue.use(ToastPlugin)
Vue.use(AlertPlugin)

/**
 * 定义常量
 */
let serverName = 'http://test.ebaoping.com/'
if (process.env.NODE_ENV === 'development') {
  serverName = 'http://test.ebaoping.com/'
}
export {serverName}
export let serverUrlName = serverName + 'data/image/'
/**
 * 定义全局公用常量
 */
Vue.prototype.serverName = serverName

/**
 * 定义全局公用方法
 */
Vue.prototype.http = function (opts) {
  let vue = this
  vue.$vux.loading.show({
    text: 'Loading'
  })
  vue.$http({
    method: opts.method,
    url: serverName + opts.url,
    headers: {'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'},
    params: opts.params || {},
    data: qs.stringify(opts.data)
  }).then(function (response) {
    vue.$vux.loading.hide()

    opts.success(response.data)
  })
}

Vue.prototype.get = function (opts) {
  opts.method = 'get'
  this.http(opts)
}

Vue.prototype.post = function (opts) {
  opts.method = 'post'
  this.http(opts)
}

Vue.prototype.put = function (opts) {
  opts.method = 'put'
  this.http(opts)
}

Vue.prototype.delete = function (opts) {
  opts.method = 'delete'
  this.http(opts)
}

Vue.prototype.valid = function (opts) {
  let vue = this
  let valid = true

  if (opts.ref && !opts.ref.valid) {
    valid = false
  }

  if (opts.ignoreRefs) {
    let newRefs = []
    for (let i in opts.refs) {
      let ref = opts.refs[i]
      for (let j in opts.ignoreRefs) {
        let ignoreRef = opts.ignoreRefs[j]
        if (ref !== ignoreRef) {
          newRefs.push(ref)
        }
      }
    }
    opts.refs = newRefs
  }

  for (let i in opts.refs) {
    if (!opts.refs[i].valid) {
      valid = false
      break
    }
  }

  if (valid) {
    opts.success()
  } else if (opts.error) {
    opts.error()
  } else {
    vue.$vux.toast.show({
      text: '请检查输入'
    })
  }
}

// 弹出带图标的提示提示信息
Vue.prototype.prop = function (obj) {
  let vue = this
  let type = obj.type || 'text'
  let width = obj.width || '8em'
  let text = obj.text || '发生未知错误'
  let position = obj.position || 'middle'
  let time = obj.time || '2000'
  let textLength = obj.text.length
  if (textLength > 6) {
    width = textLength + 2 + 'em'
  }
  vue.$vux.toast.show({
    isShowMask: true,
    type: type,
    width: width,
    text: text,
    time: time,
    position: position
  })
}

export let identityCodeValid = function (code) {
  var pass = true
  if (!code || !/^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}[\dx]$/i.test(code)) {
    alert(1)
    pass = false
  } else {
    if (code.length === 18) {
      code = code.split('')
      var factor = [ 7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2 ]
      var parity = [ 1, 0, 'X', 9, 8, 7, 6, 5, 4, 3, 2 ]
      var sum = 0
      var ai = 0
      var wi = 0
      for (var i = 0; i < 17; i++) {
        ai = code[i]
        wi = factor[i]
        sum += ai * wi
      }
      if (parity[sum % 11] !== parseInt(code[17].toUpperCase())) {
        pass = false
      }
    }
  }
  return pass
}

export let isWeixin = () => {
  var ua = navigator.userAgent.toLowerCase()
  if (ua.match(/MicroMessenger/i) === 'micromessenger') {
    return true
  } else {
    return false
  }
}

export function hasClass (el, className) {
  let reg = new RegExp('(^|\\s)' + className + '(\\s|$)')
  return reg.test(el.className)
}

export function addClass (el, className) {
  if (hasClass(el, className)) {
    return
  }

  let newClass = el.className.split(' ')
  newClass.push(className)
  el.className = newClass.join(' ')
}

export function getData (el, name, val) {
  const prefix = 'data-'
  if (val) {
    return el.setAttribute(prefix + name, val)
  }
  return el.getAttribute(prefix + name)
}
