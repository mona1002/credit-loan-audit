//获取cookie
export function getCookie(Name) {
    var search = Name + "="
    var returnvalue = "";
    var sd, end;
    if (document.cookie.length > 0) {
       sd = document.cookie.indexOf(search);
      if (sd!= -1) {
         sd += search.length;
         end = document.cookie.indexOf(";", sd);
         if (end == -1)
          end = document.cookie.length;
         returnvalue=unescape(document.cookie.substring(sd, end))
       }
    } 
    return returnvalue;
 }
  
 //设置cookie
 export function setCookie (c_name, value, expiredays) {
  var exdate = new Date();
  exdate.setDate(exdate.getDate() + expiredays);
  document.cookie = c_name + "=" + escape(value) + ((expiredays == null) ? "" : ";expires=" + exdate.toGMTString());
 };
  
 //删除cookie
 export function delCookie (name) {
  var exp = new Date();
  exp.setTime(exp.getTime() - 1);
  var cval = getCookie(name);
  if (cval != null)
   document.cookie = name + "=" + cval + ";expires=" + exp.toGMTString();
 };