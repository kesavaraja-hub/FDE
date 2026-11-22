// Experiment 10: database connectivity with built-in SQLite (Node 22.5+)
import { DatabaseSync } from "node:sqlite";
 
const db = new DatabaseSync("novamart.db");
db.exec(`CREATE TABLE IF NOT EXISTS orders (
  id INTEGER PRIMARY KEY, customer_id INTEGER,
  product TEXT, qty INTEGER, amount REAL, status TEXT)`);
 
const insert = db.prepare(`INSERT INTO orders
  (customer_id, product, qty, amount, status) VALUES (?, ?, ?, ?, ?)`);
insert.run(1, "Laptop", 1, 55000, "SHIPPED");
insert.run(1, "Mouse", 2, 1300, "DELIVERED");
insert.run(2, "Keyboard", 1, 1800, "PENDING");
 
const rows = db.prepare("SELECT * FROM orders WHERE customer_id = ?").all(1);
console.table(rows);
