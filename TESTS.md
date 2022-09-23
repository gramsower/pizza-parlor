### Tests

Describe: Pizza()

Test: "It should return a Pizza object with four properties: customer name, size, toppings and price."
Code: const myPizza = new Pizza("John", "medium", ["ham", "pineapple"], "$20.00");
Expected Output: Pizza { customerName: "John", size: "medium", toppings: ["ham", "pineapple"], price: "20.00" }

Describe: orderPrice(size, topping)
Test: "It should return the price of a pizza without any additional toppings."
Code: const orderPrice = new orderPrice("medium")
Expected output: 17

Test: "It should return the price of a pizza with one additional topping."
Code: const orderPrice = new orderPrice("medium", "2");
Expected output: 20


