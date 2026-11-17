function simpleHandler(event) {
  var content = document.getElementById("content");
  btn.disabled = true;
  if (btn.innerHTML == "Hide") {
    btn.innerHTML = "Show";
    content.className = "makeItDisappear";
    setTimeout(function () {
      content.style.display = "none";
      btn.disabled = false;
    }, 1000);
  } else {
    btn.innerHTML = "Hide";
    content.style.display = "block";
    setTimeout(function () {
      content.className = "makeItNormal";
      btn.disabled = false;
    }, 500);
  }
}
var btn = document.getElementById("testButton");
btn.addEventListener("click", simpleHandler);
var img = document.getElementById("mainImage");
img.addEventListener("mouseover", function (event) {
  img.className = "makeItGray";
});
img.addEventListener("mouseout", function (event) {
  img.className = "makeItNormal";
});
