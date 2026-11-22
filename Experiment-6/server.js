// Experiment 6: first Express 5 server
import express from "express";
 
const app = express();
 
app.get("/", (req, res) => {
  res.send("NovaMart API is running");
});
 
app.get("/api/health", (req, res) => {
  res.json({ status: "UP", time: new Date().toISOString() });
});
 
app.listen(3000, () => console.log("Server on http://localhost:3000"));
