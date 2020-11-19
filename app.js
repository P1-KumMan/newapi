const express = require("express");
const app = express();
const mongoose = require("mongoose");

app.get("/", (req, res) => {
  res.send("Alive");
});

app.get("/posts", (req, res) => {
  res.send("we are on posts");
});

mongoose.connect(
  "mongodb+srv://neo:bitbitbit8bit@cluster0.im926.mongodb.net/books?retryWrites=true&w=majority",
  { useUnifiedTopology: true, useNewUrlParser: true },

  () => console.log("connected")
);

app.listen(4200);
