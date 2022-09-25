// Business Logic for Pizza Order --------------
function Pizza(customerName, pizzaSize, pizzaToppings, numberToppings) {
  this.custName = customerName;
  this.size = pizzaSize;
  this.pToppings = pizzaToppings;
  this.numToppings = numberToppings;
  this.price = this.orderPrice(pizzaSize, numberToppings);
}

// Business Logic for Pizza Price --------------
Pizza.prototype.orderPrice = function(pizzaSize, numberToppings) {
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

  if (numberToppings >= 1) {
    price += (numberToppings *1.5)
  } else {
    price
  }  
  return price;
};

Pizza.prototype.ordSumm = function() {
  let summary = "Size: " + this.size + "\nToppings: " + this.pToppings + "\n" + "Total Price: $"+ this.price;
  return summary;
};

// UI Logic
function handleOrderSubmission(event) {
  event.preventDefault();
  const inputtedName = document.querySelector("input#order-name").value;
  const pizzaSize = document.querySelector("input[name='pizza-size']:checked").value;
  const toppings = document.getElementsByName("toppings");
  const selectedToppings=[];
  for(let i=0; i < toppings.length; i+=1){
    if(toppings[i].checked === true) {
    selectedToppings.push(toppings[i].value);
   }
  };
  const numberToppings = selectedToppings.length;
  let newOrder = new Pizza(inputtedName, pizzaSize, selectedToppings, numberToppings);
  let orderSummary = newOrder.ordSumm();

  document.getElementById("order-summary-div").removeAttribute("class");
  document.getElementById("cust-name").innerText = inputtedName;
  document.getElementById("order-summary").innerText = orderSummary;
  document.getElementById("order-summary").removeAttribute("class");
};

window.addEventListener("load", function() {
  document.querySelector("form#new-order").addEventListener("submit", handleOrderSubmission);
});