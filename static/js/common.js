// const Move = {
//   AUMove() {
//     console.log('AUMove')
//   },
//   MyMove(movingSplitID, wrap, propWidth, AUclickX, AUleftOffset, bor, nextLeft) {
//     console.log('commonjs')
//     console.log("移动left")
//     console.log(propWidth)
//     var AUclickX, AUleftOffset, inx, AUnextW2;
//     var moving = false;
//     var doc = document;
//     // var bor = $("#MID");
//     var bor = $(movingSplitID);
//     // var AUwrapWidth = this.AUpreWidth || $("#AUL").width();
//     var AUwrapWidth = propWidth || $(wrap).width();
//     bor.bind('mousedown', () => {
//       moving = true;
//       AUleftOffset = $(wrap).offset().left;
//       console.log('外层offset 的left值为：' + $(wrap).offset().left)
//       // var AUwrapWidth = this.AUpreWidth || $("#AUL").width();
//       var AUwrapWidth = propWidth || $(wrap).width();
//       console.log("影音down");
//       doc.onmousemove = function (e) {
//         console.log("影音move")
//         if (moving) {
//           AUclickX = e.pageX;
//           if (AUclickX > AUleftOffset + 10 && AUclickX < (AUwrapWidth - 5)) {
//             bor.eq(0).css('left', AUclickX - AUleftOffset + 2 + 'px'); //按钮移动
//             bor.eq(0).prev().width(AUclickX - AUleftOffset + 'px'); //前一个div宽度变化
//             console.log(11111111111)
//             AUnextW2 = AUclickX - AUleftOffset;
//             // bor.eq(0).next().width(AUwrapWidth - AUnextW2 - 17 + 'px'); //减多少宽地待算   
//             // bor.eq(0).next().css('left',  parseFloat(bor.eq(0).prev().width()) + 10 + 'px'); //减多少宽地待算
//             // bor.eq(0).next().css('left', AUclickX - AUleftOffset + 10 + 'px'); //减多少宽地待算
//             bor.eq(0).next().css('left', AUclickX - AUleftOffset + nextLeft + 'px'); //减多少宽地待算

//             //  bor.eq(0).prev().width()
//           } else if (AUclickX < AUleftOffset + 10 && AUclickX < (AUwrapWidth - 5)) {
//             console.log(22222222222222)
//             bor.eq(0).css('left', '10px');
//             bor.eq(0).prev().width('10px');
//             // bor.eq(0).next().width(AUwrapWidth - 17 + 'px'); //减多少宽地待算
//             bor.eq(0).next().css('left', '20px');
//           }
//           console.log(AUclickX + "=========" + AUwrapWidth)
//           if ((AUclickX - AUleftOffset) > (AUwrapWidth - 10)) {
//             console.log(3333333333333)
//             // console.log(AUwrapWidth)
//             bor.eq(0).css('left', parseFloat(AUwrapWidth) - 18 + 'px');
//             bor.eq(0).prev().width(AUwrapWidth - 20 + 'px');

//           }
//         }
//       };
//     });
//     $(doc).mouseup(function (e) {
//       moving = false;
//       e.cancelBubble = true;
//     });
//   },
//   odivMove(id) {
//     var disX = 0;
//     var disY = 0;
//     var oDiv = document.getElementById(id);
//     oDiv.onmousedown = function (ev) {
//       var oEvent = ev || event;
//       disX = oEvent.clientX - oDiv.offsetLeft;
//       disY = oEvent.clientY - oDiv.offsetTop;
//       document.onmousemove = function (ev) {
//         var oEvent = ev || event;
//         oDiv.style.left = oEvent.clientX - disX + "px";
//         oDiv.style.top = oEvent.clientY - disY + "px";
//       }
//       document.onmouseup = function (ev) {
//         document.onmousemove = null;
//         document.onmouseup = null;
//       }
//       return false;
//     };
//   },
// }
// export default Move
