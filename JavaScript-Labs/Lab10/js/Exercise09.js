$(function () {
  var url = "http://www.randyconnolly.com/funwebdev/services/travel/cities.php";
  // GitHub Pages dùng HTTPS nên không cho gọi dịch vụ HTTP.
  // Bản JSON này được tải nguyên từ chính dịch vụ trong tài liệu.
  if (location.protocol == "https:") {
    url = "data/cities.json";
    $("#sourceInfo").text(
      "Nguồn: bản lưu 53 thành phố từ dịch vụ gốc ngày 17/11/2026.",
    );
  } else {
    $("#sourceInfo").text("Nguồn: gọi trực tiếp dịch vụ HTTP trong tài liệu.");
  }

  $("#consume").click(function () {
    $("#results").html("<ul></ul>");
    $.get(
      url,
      function (data, status) {
        if (status == "success") {
          $.each(data, function (index, value) {
            var li = $("<li/>").text(value.name);
            li.appendTo("div#results ul");
          });
        }
      },
      "json",
    );
  });
});
