const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv/config");

const bodyParser = require("body-parser");
app.use(bodyParser.json());

const postRoute = require("./routes/posts");

app.use("/books", postRoute);

mongoose.connect(
  "mongodb+srv://neo:bitbitbit8bit@cluster0.im926.mongodb.net/books?retryWrites=true&w=majority",
  { useUnifiedTopology: true, useNewUrlParser: true },
  () => console.log("connected")
);

app.get("/", (req, res) => {
  res.send("Alive");
});
const port = process.env.PORT || "4200";

app.listen(port);
