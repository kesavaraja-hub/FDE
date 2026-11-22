// Experiment 7: REST CRUD API (in-memory data)
import express from "express";
const app = express();
app.use(express.json());                 // read JSON request bodies
 
let products = [
  { id: 1, name: "Laptop", price: 55000 },
  { id: 2, name: "Mouse", price: 650 },
];
 
app.get("/api/products", (req, res) => res.json(products));
 
app.get("/api/products/:id", (req, res) => {
  const p = products.find(x => x.id === Number(req.params.id));
  if (!p) return res.status(404).json({ error: "Product not found" });
  res.json(p);
});

app.post("/api/products", (req, res) => {
  const p = { id: products.length + 1, ...req.body };
  products.push(p);
  res.status(201).json(p);
});
 
app.put("/api/products/:id", (req, res) => {
  const p = products.find(x => x.id === Number(req.params.id));
  if (!p) return res.status(404).json({ error: "Product not found" });
  Object.assign(p, req.body);
  res.json(p);
});
 
app.delete("/api/products/:id", (req, res) => {
  products = products.filter(x => x.id !== Number(req.params.id));
  res.status(204).end();
});
 
app.listen(3000, () => console.log("CRUD API on http://localhost:3000"));
