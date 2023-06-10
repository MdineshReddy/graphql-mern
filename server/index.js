const express = require("express");
const app = express();
const schema = require("./schema/schema");
const { graphqlHTTP } = require("express-graphql");
const colors = require("colors");
require("dotenv").config();
const cors = require("cors");
const connectDB = require("./config/db");

app.use(cors());

const PORT = process.env.PORT || 5000;

connectDB();

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV === "development",
  })
);

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}.`);
});
