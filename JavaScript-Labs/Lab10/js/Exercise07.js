$("figure img").on("mouseover", function (e) {
  var src = $(this).attr("src").replace("small", "medium");
  var preview = $('<div id="preview"></div>');
  preview.append($("<img>").attr("src", src));
  preview.append($("<p></p>").text($(this).attr("alt")));
  $("body").append(preview);
  $(this).addClass("gray");
  movePreview(e);
  $("#preview").fadeIn(1000);
});
function movePreview(e) {
  $("#preview")
    .css("top", e.pageY + 10)
    .css("left", Math.min(e.pageX + 30, Math.max(0, window.innerWidth - 380)));
}
$("figure img").on("mousemove", movePreview);
$("figure img").on("mouseleave", function () {
  $(this).removeClass("gray");
  $("#preview").remove();
});
