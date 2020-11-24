const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv/config");
const cors = require("cors");
const postRoute = require("./routes/books");
const authorRoute = require("./routes/author");

app.use(cors());
const bodyParser = require("body-parser");
app.use(bodyParser.json());

app.use("/books", postRoute);

app.use("/author", authorRoute);

mongoose.connect(
  process.env.DATABASE_URL,
  { useUnifiedTopology: true, useNewUrlParser: true },
  () => console.log("connected")
);

app.get("/", (req, res) => {
  res.send("Alive");
});

app.get("/lol", (req, res) => {
  res.send("Alive");
});

const port = process.env.PORT || "4200";

app.listen(port);
