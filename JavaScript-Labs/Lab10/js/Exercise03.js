// Có thể thử :password để chỉ chọn ô mật khẩu.
// $(":password").css("background-color", "yellow");
$("form :nth-child(4n)").css("background-color", "yellow");
$("label:contains('word')").css("color", "black");
$("#sampleForm").on("submit", function (e) {
  e.preventDefault();
});
