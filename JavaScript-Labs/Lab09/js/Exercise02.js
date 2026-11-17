var first = document.getElementById("first");
console.log(first);
console.log(first.firstChild);
console.log(first.firstChild.nextSibling);
console.log(first.parentNode);
var stories = document.getElementById("stories");
for (var i = 0; i < stories.childNodes.length; i++) {
  console.log(
    "child " +
      i +
      " =" +
      stories.childNodes[i] +
      " nodeType=" +
      stories.childNodes[i].nodeType,
  );
}
// Chỉ tô nền nút phần tử trong first, không tô nút văn bản khoảng trắng.
for (var i = 0; i < first.childNodes.length; i++) {
  if (first.childNodes[i].nodeType == 1) {
    first.childNodes[i].style.backgroundColor = "lightblue";
  }
}
