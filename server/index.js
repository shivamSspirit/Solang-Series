const mongoose = require("mongoose");
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const jsonParser = bodyParser.json();

const port = 5000;

app.listen(port, () => {
  console.log(`App running from port ${port}`);
});

mongoose
  .connect(process.env.DATABASE_LOCAL)
  .then(() => console.log("MongoDB connected successfully"))
  .catch((err) => console.log(err));
