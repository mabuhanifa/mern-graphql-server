const express = require("express");
const cors = require("cors");
const colors = require("colors");
const port = process.env.PORT || 5000;
require("dotenv").config();
const app = express();
const schema = require("./schema/schema");
app.use(express.json());
app.use(cors());
const connectDb = require("./config/db");

//connect to database
connectDb();

const { graphqlHTTP } = require("express-graphql");


app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

app.listen(port, () => {
  console.log(`App listening on ${port}`);
});
