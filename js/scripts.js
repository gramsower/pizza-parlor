// Business Logic for Pizza Order --------------
function Pizza(customerName, pizzaSize, pizzaToppings) {
  this.customerName = customerName;
  this.pizzaSize = pizzaSize;
  this.pizzaToppings = pizzaToppings;
  this.price = this.orderPrice;
}

// Business Logic for Pizza Price --------------
Pizza.prototype.orderPrice = function(pizzaSize, pizzaToppings) {
  let price = 0;
  let numberToppings = parseInt(pizzaToppings);
  if (pizzaSize === "small") {
    price += 14;
  } else if (pizzaSize === "medium") {
    price += 17;
  } else if (pizzaSize === "large") {
    price +=20;
  } else { 
    price +=25;
  } 

  if (numberToppings >= 1) {
    price += (numberToppings *1.5)
  } else {
    price
  }  
  return price;
};




// UI Logic
let pizza = new Pizza();

function handleOrderSubmission(event) {
  event.preventDefault();
  const inputtedName = document.querySelector("input#order-name").value;
  const pizzaSize = document.querySelector("input#pizza-size").value;
  const toppings = [];
  const topping1 = document.getElementById(
  


}

window.addEventListener("load", function() {
  document.querySelector("form#new-order").addEventListener("submit", handleFormSubmission);
});
