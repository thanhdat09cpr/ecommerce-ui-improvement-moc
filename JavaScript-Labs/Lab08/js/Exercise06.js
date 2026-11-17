var stringOne = new String("Test");
var stringTwo = "Test";
var stringThree = "Test";
var stringFour = new String("Test");
document.write("<p>typeof stringOne = " + typeof stringOne + "</p>");
document.write("<p>typeof stringTwo = " + typeof stringTwo + "</p>");
document.write(
  "<p>stringOne == stringTwo: " + (stringOne == stringTwo) + "</p>",
);
document.write(
  "<p>stringOne === stringTwo: " + (stringOne === stringTwo) + "</p>",
);
document.write(
  "<p>stringOne == stringFour: " + (stringOne == stringFour) + "</p>",
);
document.write(
  "<p>stringTwo === stringThree: " + (stringTwo === stringThree) + "</p>",
);
var dateOne = new Date();
document.write("<p>Ngày hiện tại: " + dateOne + "</p>");
document.write("<p>PI = " + Math.PI + "</p>");
document.write("<p>Căn bậc hai của 4 = " + Math.sqrt(4) + "</p>");
document.write("<p>Số ngẫu nhiên = " + Math.random() + "</p>");
