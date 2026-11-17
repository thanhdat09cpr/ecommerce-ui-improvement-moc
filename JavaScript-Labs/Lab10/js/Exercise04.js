$(function () {
  $(".panel").on("mousemove", function (e) {
    $("#message").text("x=" + e.pageX + " y=" + e.pageY);
  });
  $(".panel").on("mouseleave", function () {
    $("#message").text("goodbye!");
  });
  $(".panel").on("click", function () {
    $("#message").text("stopped move reporting");
    $(".panel").off("mousemove");
  });
});
