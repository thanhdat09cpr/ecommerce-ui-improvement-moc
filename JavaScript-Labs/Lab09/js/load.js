window.addEventListener("load", function () {
  var divToGet = document.getElementById("div1");
  document.getElementById("result").textContent =
    "Đã tải trang: " + divToGet.innerHTML;
});
