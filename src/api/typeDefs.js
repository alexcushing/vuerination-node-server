const { gql } = require('apollo-server-express');

export const typeDefs = gql`
  type Urinator {
    id: ID!
    name: String!
    location: String
    bio: String
    img: String
    shyness: Boolean
    deleted: Boolean
    count: Int!
  }
  type Query {
    urinators: [Urinator!]!
    urinator(name: String!): Urinator!
  },
  type Mutation {
    addUrinator(name: String!, location: String, bio: String, img: String, shyness: Boolean): Urinator,
    addPee(name: String!): Urinator,
    removePee(name: String!): Urinator
    removeUrinator(name: String!): Urinator
  }
`;