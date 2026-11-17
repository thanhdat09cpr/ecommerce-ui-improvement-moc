function Order(product, price, quantity) {
  this.product = product;
  this.price = price;
  this.quantity = quantity;
  this.total = function () {
    return this.price * this.quantity;
  };
  this.output = function () {
    document.write("<section><p>Product = " + this.product + "</p>");
    document.write("<p>Price = " + this.price + "</p>");
    document.write("<p>Quantity = " + this.quantity + "</p>");
    document.write("<p>Total = " + this.total() + "</p></section>");
  };
}
var example1 = new Order("Self Portrait in a Straw Hat", 15, 2);
var example2 = new Order("Untitled #23", 10, 4);
example1.output();
example2.output();
