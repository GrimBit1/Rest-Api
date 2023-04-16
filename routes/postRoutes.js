const express = require("express");
const router = express.Router();
const mongoose  

router.post("/", (req, res) => {
  res.send("Got a post request");
});

module.exports = router;
