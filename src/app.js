require("regenerator-runtime/runtime");
require("dotenv");
const express = require('express');
const uri = `mongodb+srv://alex:${process.env.MONGO_PW}@cluster0-althu.mongodb.net/vuerinators?retryWrites=true&w=majority`;
const mongoose = require('mongoose');
const Apollo = require('apollo-server-express');
const ApolloServer = Apollo.ApolloServer;

const resolversFile =  require('./api/resolvers.js');
const typeDefsFile =  require('./api/typeDefs.js');
const resolvers = resolversFile.resolvers;
const typeDefs = typeDefsFile.typeDefs;

const app = express();

mongoose.connect(uri, 
  { useNewUrlParser: true, useUnifiedTopology: true }
).then(() => {
  const server = new ApolloServer({
    typeDefs,
    resolvers
  });
  server.applyMiddleware({ app })

  app.listen(process.env.PORT || 5000, () => {
    console.log('server on 5😇😇😇')
  });
});