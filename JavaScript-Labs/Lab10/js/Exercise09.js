$("#consume").on("click", function () {
  $("#results").empty();
  $.get(
    $("#source").val(),
    function (data, status) {
      if (status == "success") {
        var list = $("<ul></ul>");
        $.each(data, function (index, value) {
          list.append($("<li></li>").text(value.name));
        });
        $("#results").append(list);
      }
    },
    "json",
  ).fail(function () {
    $("#results").text("Không tải được dữ liệu. Hãy thử nguồn dữ liệu mẫu.");
  });
});
