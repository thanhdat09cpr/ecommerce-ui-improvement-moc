$(function () {
  var img = $('<img src="images/art/thumbs/13030.jpg" alt="Art">');
  var panel = $(".panel");
  // Các cách chèn được thử lần lượt, chỉ bật một dòng mỗi lần.
  // panel.after(img);
  // panel.before(img);
  // panel.append(img);
  // panel.prepend(img);
  // img.appendTo(panel);
  // img.prependTo(panel);
  img.insertBefore(panel);
});
