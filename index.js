const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const { resolvers } = require("./schema/resolvers");
const { typeDefs } = require("./schema/typedefs");

const app = express();
app.use(express.json());

const server = new ApolloServer({ typeDefs, resolvers });

async function main() {
  await server.start();
  server.applyMiddleware({ app });
}
main();

app.listen(8000, () => console.log("running"));
