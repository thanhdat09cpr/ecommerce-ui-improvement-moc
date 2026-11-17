var msg = document.getElementById("msgArea");
document.getElementById("pageTitle").innerHTML = "Even newer title";
msg.value = "My class is " + msg.getAttribute("class");
var spans = document.getElementsByTagName("span");
for (var i = 0; i < spans.length; i++) {
  console.log(spans[i].innerText);
}
var counts = document.getElementsByClassName("count-number");
console.log("Số phần tử count-number:", counts.length);
var firstParagraph = document.querySelector("#first p");
msg.value += "\n" + firstParagraph.innerText;
var ps = document.querySelectorAll("#first p");
for (var i = 0; i < ps.length; i++) {
  msg.value += "\n" + ps[i].innerHTML;
}
msg.setAttribute("class", "hidden");
document.getElementById("features").style.backgroundColor = "lightgreen";
document.getElementById("show").onclick = function () {
  msg.setAttribute("class", "message");
};
