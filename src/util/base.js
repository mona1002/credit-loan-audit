exports.install = function (Vue, options) {
  // // 获取b日期前后N天日期。_getDate（3）后3天，_getDate（-3）前三天，不穿b默认查询当天日期。
  // // 参数：   b:要查询的日期，a：要查询日期（b）的前/后 a 天
  // Vue.prototype._getDate = function (a = 0, b = '') {
  //   let time = new Date();
  //   b == '' ? b = time : '';
  //   time.setDate(new Date(b).getDate() + a);
  //   let year = time.getFullYear(),
  //     month = (time.getMonth() + 1 + '').length == 1 ? '0' + (time.getMonth() + 1) : time.getMonth() + 1,
  //     day = (time.getDate() + '').length == 1 ? '0' + time.getDate() : time.getDate();
  //   return year + '-' + month + '-' + day;
  // };
  //获取 b 日期前后month月day天日期  ---_getDate（3,9）3个月零9天后，不穿b默认查询当天日期。（-3：前三个月）
  // 参数：b:起始日期 （不穿b默认查询当天日期）
  //  month：几个月后（Num）  day：几天后（Num）
  // MonBoo / DayBoo：月份/ 日期 是否补0
  Vue.prototype._getDate = function (month = 0, day = 0, MonBoo = true, DayBoo = true, b = '') {
    let time = b == '' ? new Date() : new Date(b);
    time.setDate(time.getDate() + day); //获取Day天后的日期 
    let y = time.getFullYear(),
      m = '',
      d = '';
    if (time.getMonth() + month + 1 > 12) {
      y = y + 1;
      m = time.getMonth() + month - 11; //获取当前月份的日期 d
    } else {
      m = time.getMonth() + month + 1; //获取当前月份的日期 d
    }
    d = time.getDate();
    if (MonBoo) m = m.toString().length == 1 ? '0' + m : m;
    if (DayBoo) d = d.toString().length == 1 ? '0' + d : d;
    return y + "-" + m + "-" + d;
  }
  // 错误提示语
  Vue.prototype._error = function (msg = '') {
    return this.$message.error(msg)
  };
  //成功提示语
  Vue.prototype._succe = function (msg = '') {
    return this.$message({
      type: 'success',
      message: msg
    })
  };
  // 删除页签
  Vue.prototype._del = function (delname = '') {
    this.$store.dispatch('delVisitedViews', {
      name: delname
    }).then((views) => {
      const latestView = views.slice(-1)[0]
      if (latestView) {
        this.$router.push(latestView.StatefullPath);
      } else {
        this.$router.push('/')
      }
    })
  }
  //保留两位小数 整数千分位
  Vue.prototype._formatNumber = function (num, cent = 2, isThousand = 0) {
    num || num == 0 ? num = num.toString().replace(/\$|\,/g, '') : '';
    if (!num && num != 0) return ''; //无值返回空
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
      if (sign == true) {
        return (((sign) ? '' : '-') + num + '.' + cents);
      } else if (sign == false) {
        return '0.00'
      }
    } else {
      return (((sign) ? '' : '-') + num);
    }
  };

}
