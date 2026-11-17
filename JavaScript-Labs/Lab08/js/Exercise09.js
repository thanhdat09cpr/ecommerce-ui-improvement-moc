var isCanadian = true;
function calculateTax(amount, tax) {
  return amount * tax();
}
function calculateTotal(price, quantity) {
  var amount = price * quantity;
  return (
    amount +
    calculateTax(amount, function () {
      if (isCanadian) {
        return 0.05;
      } else {
        return 0;
      }
    })
  );
}
var amount = calculateTotal(15, 2);
document.write("<p>Price: $15.00 | Quantity: 2 | Tax: 5%</p>");
document.write("<p>Total: $" + amount.toFixed(2) + "</p>");
