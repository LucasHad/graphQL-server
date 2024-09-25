const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    id: Int!
    firstName: String!
    lastName: String!
    email: String!
    password: String!
    isNew: Boolean
  }

  # Query  (would be GET method in REST)
  type Query {
    getAllUsers: [User!]!
    getMe: User
  }

  # Mutations (all other methods in ONE)

  type Mutation {
    createUser(firstName: String, lastName: String, isNew: Boolean): User
  }
`;

module.exports = {
  typeDefs,
};
