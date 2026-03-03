const express = require("express");
const cors = require("cors");
require("dotenv").config();
const connectDB = require("./routes/db");

const app = express();

app.use(cors());
app.use(express.json()); // parse JSON body

connectDB();

app.get("/api/welcome", (req, res) => {
  res.json({ message: "Welcome to the Musicer API!" });
});

app.get("/api/hello", (req, res) => {
  res.json({ message: "Hello there!" });
});

const authRoutes = require("./routes/auth");
app.use(authRoutes);
const fetchPostRoutes = require("./routes/fetchPosts");
app.use(fetchPostRoutes);


app.listen(5000, () => {
  console.log("Server running on port 5000");
});
