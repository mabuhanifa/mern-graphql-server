const express = require("express");
const cors = require("cors");
const port = process.env.PORT || 5000;
require("dotenv").config();
const app = express();
const schema = require("./schema/schema");
app.use(express.json());
app.use(cors());

const { graphqlHTTP } = require("express-graphql");

app.use(
  "/graphql",
  graphqlHTTP({
    schema
  })
);

app.listen(port, () => {
  console.log(`App listening on ${port}`);
});
