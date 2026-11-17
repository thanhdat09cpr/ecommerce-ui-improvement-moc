function init() {
  document
    .getElementById("sampleForm")
    .addEventListener("submit", checkForEmptyFields);
}
window.addEventListener("load", init);
function checkForEmptyFields(e) {
  var errorArea = document.getElementById("errors");
  errorArea.className = "hidden";
  var fields = document.querySelectorAll(
    "input[type=text],input[type=password]",
  );
  var fieldList = [];
  for (var i = 0; i < fields.length; i++) {
    if (fields[i].value == null || fields[i].value.trim() == "") {
      e.preventDefault();
      fieldList.push(fields[i]);
    }
  }
  if (fieldList.length > 0) {
    var msg = "The following fields can't be empty: ";
    for (var i = 0; i < fieldList.length; i++) {
      msg += fieldList[i].id + ", ";
    }
    errorArea.innerHTML = "<p>" + msg + "</p>";
    errorArea.className = "visible";
  }
}
