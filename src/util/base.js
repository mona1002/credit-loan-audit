// 获取b日期前后N天日期。_getDate（3）后3天，_getDate（-3）前三天，不穿b默认查询当天日期。
// 参数：   b:要查询的日期，a：要查询日期（b）的前/后 a 天
exports.install = function (Vue, options) {
  Vue.prototype._getDate = function (a = 0,b='') {
    let time = new Date();
    b==''?b=time:'';
    time.setDate(new Date(b).getDate() + a);
    let year = time.getFullYear(),
      month = (time.getMonth() + 1 + '').length == 1 ? '0' + (time.getMonth() + 1) : time.getMonth() + 1,
      day = time.getDate();
    return year + '-' + month + '-' + day;
  };
}
