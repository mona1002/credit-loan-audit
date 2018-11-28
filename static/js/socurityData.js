
export default{
    formatMoney:function (val, row) {
        var t = "";
        var i;
        if (!$.isNumeric(val)) {
          return val;
        }
        //if(val!=null && val!=undefined){
        var n = 2;
        val = parseFloat((val + "").replace(/[^\d\.-]/g, "")).toFixed(n) + "";
        var l = val.split(".")[0].split("").reverse(),
          r = val.split(".")[1];
        for (i = 0; i < l.length; i++) {
          t += l[i] + ((i + 1) % 3 == 0 && (i + 1) != l.length ? "," : "");
        }
        return t.split("").reverse().join("") + "." + r;
        //}
      },
}