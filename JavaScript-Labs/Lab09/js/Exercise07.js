function setBackground(e) {
  if (e.type == "focus") {
    e.target.style.backgroundColor = "#FFE393";
  } else {
    e.target.style.backgroundColor = "white";
  }
}
var fields = document.querySelectorAll(
  "input[type=text], input[type=password]",
);
for (var i = 0; i < fields.length; i++) {
  fields[i].addEventListener("focus", setBackground);
  fields[i].addEventListener("blur", setBackground);
}
document.getElementById("sampleForm").addEventListener("submit", function (e) {
  e.preventDefault();
  document.getElementById("errors").textContent =
    "Form thực hành, không gửi thông tin lên máy chủ.";
});
