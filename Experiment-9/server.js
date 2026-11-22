import express from "express";

const app = express();
app.use(express.json());
app.use((req, res, next) => {                         // request logger
  console.log(new Date().toISOString(), req.method, req.url);
  next();
});
// ...
app.post("/api/orders", requireAuth, (req, res) => {
  const { customer_id, product, qty, amount } = req.body;
  if (!customer_id || !product || !(qty > 0))
    return res.status(400)
      .json({ error: "customer_id, product and qty > 0 are required" });
  const r = addOrder({ customer_id, product, qty, amount });
  res.status(201).json({ id: Number(r.lastInsertRowid), status: "PENDING" });
});

function requireAuth(req, res, next) {
  const token = req.headers.authorization;

  if (token !== "Bearer novamart123") {
    return res.status(401).json({
      error: "Unauthorized access"
    });
  }

  next();
}
app.listen(3000, () => console.log("Server on http://localhost:3000"));
