// 获取当前日期前后N天日期，_getDate（3）后3天，_getDate（-3）前三天
exports.install = function (Vue, options) {
  Vue.prototype._getDate = function (a = 0,b='') {
    let time = new Date();
    b==''?b=new Date():'';
    time.setDate(new Date(b).getDate() + a);
    let year = time.getFullYear(),
      month = (time.getMonth() + 1 + '').length == 1 ? '0' + (time.getMonth() + 1) : time.getMonth() + 1,
      day = time.getDate();
    return year + '-' + month + '-' + day;
  };
}
