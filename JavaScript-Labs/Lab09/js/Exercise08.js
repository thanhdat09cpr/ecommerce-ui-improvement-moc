document.getElementById("sampleForm").addEventListener("submit", function (e) {
  // Bài tập chỉ kiểm tra dữ liệu, không tạo tài khoản thật.
  e.preventDefault();
  var fields = document.querySelectorAll(
    "input[type=text], input[type=password]",
  );
  var missing = [];
  for (var i = 0; i < fields.length; i++) {
    if (fields[i].value.trim() == "") {
      missing.push(fields[i].id);
    }
  }
  var errors = document.getElementById("errors");
  if (missing.length > 0) {
    errors.textContent = "Không được bỏ trống: " + missing.join(", ");
    errors.style.color = "red";
  } else {
    errors.textContent =
      "Đã nhập đủ các trường. Form thực hành không gửi dữ liệu.";
    errors.style.color = "green";
  }
});
