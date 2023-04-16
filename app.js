const express = require("express");
const app = express();
const mongoose = require("mongoose");
const port = 3000;
require("dotenv").config();
// console.log(process.env) // remove this after you've confirmed it is working
// Importing routes

const postRoutes = require('./routes/postRoutes')
const getRoutes = require('./routes/getRoutes')

app.use("/", postRoutes);
app.use("/", getRoutes);

// Get request
app.get("/", (req, res) => {
  res.status(200).send("Hi");
});

app.listen(port, () => {
  console.log("Server is running on http://localhost:" + port);
});
