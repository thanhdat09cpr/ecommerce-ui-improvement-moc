var btn = document.getElementById("testButton");
var content = document.getElementById("content");
btn.addEventListener("click", function () {
  btn.disabled = true;
  if (btn.textContent == "Hide") {
    btn.textContent = "Show";
    content.className = "makeItDisappear";
    setTimeout(function () {
      content.style.display = "none";
      btn.disabled = false;
    }, 1000);
  } else {
    btn.textContent = "Hide";
    content.style.display = "block";
    setTimeout(function () {
      content.className = "makeItNormal";
      btn.disabled = false;
    }, 500);
  }
});
var img = document.getElementById("mainImage");
img.addEventListener("mouseover", function () {
  img.className = "photo makeItGray";
});
img.addEventListener("mouseout", function () {
  img.className = "photo makeItNormal";
});
