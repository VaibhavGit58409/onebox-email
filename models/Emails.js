const mongoose = require("mongoose");

const EmailSchema = new mongoose.Schema({
  sender: String,
  subject: String,
  body: String,
  date: Date,
  category: String,
});

module.exports = mongoose.model("Email", EmailSchema);
