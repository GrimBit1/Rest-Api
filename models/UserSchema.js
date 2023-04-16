const mongoose = require("mongoose");

let UserSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  isCreated: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model("Users", UserSchema);
 