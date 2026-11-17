$("#animate").on("click", function () {
  var endLeft = Math.min(495, $("#stage").width() - 70);
  $("#box").stop(true).css({ left: 0, top: 10, height: 100, opacity: 0.5 });
  $("#box")
    .animate({ left: endLeft, opacity: 1, height: 50 })
    .animate({ top: 400, opacity: 0.2 })
    .animate({ height: 200 }, 2000);
});
