/**
 * 精确到指定位数的小数
 * @param {number} n 原数字
 * @param {number} decimals 位数
 * @returns {number}
 */
const round = (n, decimals = 0) => Number(`${Math.round(`${n}e${decimals}`)}e-${decimals}`)
round(1.345, 2)                 // 1.35
round(1.345, 1)                 // 1.3