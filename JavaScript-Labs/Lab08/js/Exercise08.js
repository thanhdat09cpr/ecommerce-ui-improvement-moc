var boxClass = "movingDiv";
function outputBox(num) {
  var box = "<div class='" + boxClass + "' id='div" + num + "'>";
  box += "This is div " + num;
  box += "</div>";
  return box;
}
for (var count = 1; count < 6; count++) {
  document.write(outputBox(count));
}
// box nằm trong hàm nên không truy cập trực tiếp được từ bên ngoài.
console.log("typeof box bên ngoài hàm:", typeof box);
