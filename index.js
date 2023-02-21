const express = require("express");
const cors = require("cors");
const port = process.env.PORT || 5000;
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(cors());

app.listen(port, () => {
  console.log(`App listening on ${port}`);
});
