window.addEventListener("load", function () {
  var divs = document.querySelectorAll(".movingDiv");
  for (var i = 0; i < divs.length; i++) {
    divs[i].addEventListener("mouseover", function (e) {
      console.log("triggered by", e.target.id);
      document.getElementById("result").textContent =
        "triggered by " + e.target.id;
    });
  }
});
