/**
 * 精确到指定位数的小数
 * @param {Number} n 原数字
 * @param {Number} decimals 位数
 * @returns {Number}
 */
const round = (n, decimals = 0) => Number(`${Math.round(`${n}e${decimals}`)}e-${decimals}`)
round(1.345, 2)                 // 1.35
round(1.345, 1)                 // 1.3

/**
 * 数字补0
 * @param {Number} num 原数字
 * @param {Number} len 位数
 * @returns {String}
 */
const addZero = (num, len = 2) => (`0${num}`).slice(-len)
const addZero = (num, len = 2) => (`${num}`).padStart(len, '0')
addZero(3)      // 03
addZero(32,4)   // 0032

/**
 * 统计数组中相同项的个数
 * @param {Array} arr 原数组
 * @returns {Array}
 */
const getSameCount = (arr) => {
  return arr.reduce((origin, key) => {
    origin[key] = origin[key] ? ++origin[key] : 1
    return origin
  }, [])
}
getSameCount(['BMW','Benz', 'Benz', 'Tesla', 'BMW', 'Toyota']) // [ BMW: 2, Benz: 2, Tesla: 1, Toyota: 1 ]
