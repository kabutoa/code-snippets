/**
 * 精确到指定位数的小数
 * @param {number} n 原数字
 * @param {number} decimals 位数
 * @returns {number}
 */
const round = (n, decimals = 0) => Number(`${Math.round(`${n}e${decimals}`)}e-${decimals}`)
round(1.345, 2)                 // 1.35
round(1.345, 1)                 // 1.3

/**
 * 数字补0
 * @param {number} num 原数字
 * @param {number} len 位数
 * @returns {string}
 */
const addZero = (num, len = 2) => (`0${num}`).slice(-len)
const addZero = (num, len = 2) => (`${num}`).padStart(len, '0')
addZero(3)      // 03
addZero2(32,4)  // 0032
