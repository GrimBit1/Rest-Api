const express = require("express");

const User = require("../models/UserSchema");

const router = express.Router();

const mongoose = require("mongoose");
// Get request for all users
router.get("/", async (req, res) => {
  let users = await User.find();
  res.json(users);
});

// post request to add user
router.post("/", async (req, res) => {
  console.log(req.body);
  let user = new User({
    name: req.body.name,
    title: req.body.title,
  });
  res.send("Got a post request");
  let data = await user.save();
  console.log("Saved Successfully");
  console.log(data);
});

// Get user by search query
router.get("/:userid", async (req, res) => {
  let user = await User.find({ name: req.params.userid });
  console.log(user);
  res.json(user);
});

// Delete user by name / userid
router.delete("/:userid", async (req, res) => {
  let user = await User.findOneAndDelete({ name: req.params.userid });
  console.log(user);
  res.json(user);
});

// Update User
router.patch("/:userid", async (req, res) => {
  console.log(req.body);
  console.log(req.body.title);
  let userUpdated = await User.updateOne(
    { name: req.params.userid },
    { $set: { name: req.body.name } }
  );
  console.log(userUpdated);
  res.json(userUpdated);
});

module.exports = router;
