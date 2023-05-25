const mongoose = require("mongoose");
const Product = require("./models/Product");
const db = mongoose
  .connect(
    "mongodb+srv://maayanap24:maayan24@cluster0.zs02nq2.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("Connected to Database");
  });

module.exports = db;
