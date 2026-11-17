$("#insert").on("click", function () {
  $("#area img").remove();
  var img = $('<img src="images/art/thumbs/13030.jpg" alt="Tranh mẫu">');
  var panel = $(".panel");
  var method = $("#method").val();
  if (method == "after") {
    panel.after(img);
  }
  if (method == "before") {
    panel.before(img);
  }
  if (method == "append") {
    panel.append(img);
  }
  if (method == "prepend") {
    panel.prepend(img);
  }
  if (method == "appendTo") {
    img.appendTo(panel);
  }
  if (method == "prependTo") {
    img.prependTo(panel);
  }
  if (method == "insertBefore") {
    img.insertBefore(panel);
  }
});
