const express = require("express");
const cors = require("cors");
const dbConnect = require("./config/database");
const todoRoutes = require("./routes/todos");

const app = express();
require("dotenv").config();
const PORT = process.env.PORT || 3000;


app.use(cors({
  origin: "*",
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type"]
}));

app.use(express.json());


app.get("/test", (req, res) => {
  res.json({ success: true, message: "Backend reachable" });
});


app.use("/api/v1", todoRoutes);


dbConnect();


app.listen(PORT, () => {
  console.log(`Server started at ${PORT}`);
});
