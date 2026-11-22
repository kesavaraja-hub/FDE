// Modern JavaScript you will use every day
const orders = [
  { id: 1, customer: "Asha", amount: 55000, status: "SHIPPED" },
  { id: 2, customer: "Ravi", amount: 1300, status: "PENDING" },
  { id: 3, customer: "Asha", amount: 1800, status: "PENDING" },
];
 
const byStatus = Object.groupBy(orders, o => o.status);      // ES2024
console.log(Object.keys(byStatus));
 
const top = orders.toSorted((a, b) => b.amount - a.amount);  // copy, then sort
console.log(top[0].customer, top[0].amount);
 
const city = orders[0].address?.city ?? "unknown";           // ?. and ??
console.log(city);
 
const { customer, ...rest } = orders[1];                     // destructuring
console.log(customer, rest);
 
const total = orders.reduce((sum, o) => sum + o.amount, 0);
console.log(`Total: ${total.toLocaleString("en-IN")}`);
