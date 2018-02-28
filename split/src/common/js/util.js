import Vue from 'vue'

/**
 * 定义常量
 */
let serverName = 'http://116.204.24.206:8080/'
if (process.env.NODE_ENV === 'development') {
  serverName = 'http://test.ebaoping.com/'
}
/**
 * 定义全局公用常量
 */
Vue.prototype.serverName = serverName

export function identityCodeValid (code) {
  var pass = true
  if (!code || !/^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}[\dx]$/i.test(code)) {
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



export function currency (value, currency, decimals) {
  const digitsRE = /(\d{3})(?=\d)/g
  value = parseFloat(value)
  if (!isFinite(value) || (!value && value !== 0)) return ''
  currency = currency != null ? currency : '$'
  decimals = decimals != null ? decimals : 2
  var stringified = Math.abs(value).toFixed(decimals)
  var _int = decimals
    ? stringified.slice(0, -1 - decimals)
    : stringified
  var i = _int.length % 3
  var head = i > 0
    ? (_int.slice(0, i) + (_int.length > 3 ? ',' : ''))
    : ''
  var _float = decimals
    ? stringified.slice(-1 - decimals)
    : ''
  var sign = value < 0 ? '-' : ''
  return sign + currency + head +
    _int.slice(i).replace(digitsRE, '$1,') +
    _float
}
