const express = require("express");

const app = express();

const mongoose = require("mongoose");

// const bodyParser = require("body-parser");

const port = 3000;

require("dotenv").config();

// console.log(process.env) // remove this after you've confirmed it is working

// Importing routes

const postRoutes = require("./routes/postRoutes");

const getRoutes = require("./routes/getRoutes");

app.use(express.json());

app.use("/post", postRoutes);

app.use("/", getRoutes);

mongoose.connect("mongodb://127.0.0.1:27017/test").then((value) => {
  console.log("Db connected");
});

// Get request
app.get("/", (req, res) => {
  res.status(200).send("Hi");
});

app.listen(port, () => {
  console.log("Server is running on http://localhost:" + port);
});
