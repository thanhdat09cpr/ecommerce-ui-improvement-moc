var daysOfWeek = ["Mon", "Tues", "Wed", "Thur", "Fri"];
daysOfWeek.push("Sat");
daysOfWeek.unshift("Sun");
document.write("<table><tr>");
for (var i = 0; i < daysOfWeek.length; i++) {
  var day = daysOfWeek[i];
  if (day.length >= 4) {
    day = "<em>" + day + "</em>";
  }
  document.write("<th>" + day + "</th>");
}
document.write("</tr>");
for (var date = 1; date <= 35; date++) {
  if (date % 7 == 1) {
    document.write("<tr>");
  }
  if (date <= 30) {
    document.write("<td>" + date + "</td>");
  } else {
    document.write("<td></td>");
  }
  if (date % 7 == 0) {
    document.write("</tr>");
  }
}
document.write("</table>");
