var productsData = [
  {
    category: "Electronics",
    products: [
      { name: "iPhone 15", price: 80000, brand: "Apple", stock: 10 },
      { name: "Galaxy S23", price: 70000, brand: "Samsung", stock: 5 },
      { name: "Pixel 8", price: 60000, brand: "Google", stock: 0 }
    ],
  },
  {
    category: "Clothing",
    products: [
      { name: "T-Shirt", price: 1000, brand: "Nike", stock: 50 },
      { name: "Jeans", price: 2500, brand: "Levis", stock: 20 },
      { name: "Jacket", price: 5000, brand: "Puma", stock: 0 }
    ],
  },
  {
    category: "Groceries",
    products: [
      { name: "Rice", price: 60, brand: "IndiaGate", stock: 100 },
      { name: "Oil", price: 150, brand: "Fortune", stock: 0 },
      { name: "Sugar", price: 45, brand: "Madhur", stock: 30 }
    ],
  },
];

//Find all product names from "Electronics"
//Find all products which are out of stock (stock = 0) and print names only
//Find total price of all products in "Clothing"
//Get all products of brand "Apple" or "Nike"
//Find the most expensive product from all categories