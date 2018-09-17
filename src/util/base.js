// 获取b日期前后N天日期。_getDate（3）后3天，_getDate（-3）前三天，不穿b默认查询当天日期。
// 参数：   b:要查询的日期，a：要查询日期（b）的前/后 a 天
exports.install = function (Vue, options) {
  Vue.prototype._getDate = function (a = 0, b = '') {
    let time = new Date();
    b == '' ? b = time : '';
    time.setDate(new Date(b).getDate() + a);
    let year = time.getFullYear(),
      month = (time.getMonth() + 1 + '').length == 1 ? '0' + (time.getMonth() + 1) : time.getMonth() + 1,
      day = (time.getDate() + '').length == 1 ? '0' + time.getDate() : time.getDate();
    return year + '-' + month + '-' + day;
  };
  //保留两位小数 整数千分位
  Vue.prototype._formatNumber = function (num, cent = 2, isThousand = 0) {
    console.log(num)
    num = num.toString().replace(/\$|\,/g, '');
    // 检查传入数值为数值类型
    if (isNaN(num))
      num = "0";
    // 获取符号(正/负数)
    let sign = (num == (num = Math.abs(num)));
    num = Math.floor(num * Math.pow(10, cent) + 0.50000000001); // 把指定的小数位先转换成整数.多余的小数位四舍五入
    let cents = num % Math.pow(10, cent); // 求出小数位数值
    num = Math.floor(num / Math.pow(10, cent)).toString(); // 求出整数位数值
    cents = cents.toString(); // 把小数位转换成字符串,以便求小数位长度
    // 补足小数位到指定的位数
    while (cents.length < cent)
      cents = "0" + cents;
    for (var i = 0; i < Math.floor((num.length - (1 + i)) / 3); i++)
      num = num.substring(0, num.length - (4 * i + 3)) + ',' + num.substring(num.length - (4 * i + 3));
    if (cent > 0) {
    console.log(1,num)
      if (sign == true) {
        return (((sign) ? '' : '-') + num + '.' + cents);
      } else if (sign == false) {
        return '0.00'
      }
    } else {
    console.log(1,num)
      return (((sign) ? '' : '-') + num);
    }
  };
}
