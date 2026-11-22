// Experiment 4: JSON <-> JavaScript objects
const text = '{"id":101,"customer":"Asha","items":["Laptop","Mouse"],"paid":true}';
 
const order = JSON.parse(text);          // JSON text -> object
console.log(order.customer, order.items.length, "items");
 
order.total = 58500;                     // change the object
const back = JSON.stringify(order, null, 2); // object -> JSON text
console.log(back);
