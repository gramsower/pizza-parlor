// Business Logic for Pizza Order --------------
function Pizza(customerName, pizzaSize, pizzaToppings) {
  this.customerName = customerName;
  this.pizzaSize = pizzaSize;
  this.pizzaToppings = pizzaToppings;
  this.price = this.orderPrice;
}


Pizza.prototype.orderPrice = function(pizzaSize, pizzaToppings) {
  let price = 0;
  if (pizzaSize === "small") {
    price += 14;
  } else if (pizzaSize === "medium") {
    price += 17;
  } else if (pizzaSize === "large") {
    price +=20;
  } else { 
    price +=25;
  } 


  return price;


};




// UI Logic
const pizza = new Pizza();

function handleOrderSubmission(event) {
  event.preventDefault();
  const inputtedName = document.querySelector("input#order-name")
window.addEventListener("load", function() {
