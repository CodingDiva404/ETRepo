// Product Class
class Product {
  constructor(id, name, price, stock) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.stock = stock;
  }

  reduceStock(quantity) {
    if (this.stock >= quantity) {
      this.stock -= quantity;
      return true;
    } else {
      console.log(`Not enough stock for ${this.name}`);
      return false;
    }
  }
}

// Customer Class
class Customer {
  constructor(id, name, email) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.cart = [];
  }

  addToCart(product, quantity) {
    this.cart.push({ product, quantity });
    console.log(`${product.name} added to cart.`);
  }

  viewCart() {
    console.log("Cart Items:");
    this.cart.forEach(item => {
      console.log(`${item.product.name} - ${item.quantity}`);
    });
  }
}

// Transaction Class
class Transaction {
  constructor(customer, cartItems) {
    this.customer = customer;
    this.cartItems = cartItems;
    this.total = 0;
  }

  processPayment() {
    this.cartItems.forEach(item => {
      if (item.product.reduceStock(item.quantity)) {
        this.total += item.product.price * item.quantity;
      }
    });

    console.log(`Transaction successful for ${this.customer.name}`);
    console.log(`Total amount: ₹${this.total}`);
  }
}

// Store Class
class Store {
  constructor(name) {
    this.name = name;
    this.products = [];
    this.customers = [];
  }

  addProduct(product) {
    this.products.push(product);
  }

  registerCustomer(customer) {
    this.customers.push(customer);
  }

  showProducts() {
    console.log("Available Products:");
    this.products.forEach(p => {
      console.log(`${p.id} - ${p.name} - ₹${p.price} (Stock: ${p.stock})`);
    });
  }
}

// ----- Simulation -----

// Create Store
const store = new Store("Tech Store");

// Add Products
const p1 = new Product(1, "Laptop", 50000, 10);
const p2 = new Product(2, "Mouse", 500, 50);
const p3 = new Product(3, "Keyboard", 1500, 20);

store.addProduct(p1);
store.addProduct(p2);
store.addProduct(p3);

// Register Customer
const customer1 = new Customer(1, "Shraddha", "shraddha@email.com");
store.registerCustomer(customer1);

// Show products
store.showProducts();

// Customer adds products to cart
customer1.addToCart(p1, 1);
customer1.addToCart(p2, 2);

// View cart
customer1.viewCart();

// Make Transaction
const transaction = new Transaction(customer1, customer1.cart);
transaction.processPayment();