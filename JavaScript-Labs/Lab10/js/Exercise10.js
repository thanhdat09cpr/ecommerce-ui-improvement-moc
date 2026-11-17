$(".animLoading").hide();
$("#consume").on("click", function () {
  $("#consume").prop("disabled", true);
  $("#results").empty();
  $(".animLoading").show();
  $.get($("#source").val(), null, null, "json")
    .done(function (data) {
      var list = $("<ul></ul>");
      $.each(data, function (index, value) {
        list.append($("<li></li>").text(value.name));
      });
      $("#results").append(list);
    })
    .fail(function (xhr, status, error) {
      $("#results").text(
        "Không tải được dữ liệu. HTTP " + xhr.status + " - " + status,
      );
    })
    .always(function () {
      $(".animLoading").hide();
      $("#consume").prop("disabled", false);
    });
});
