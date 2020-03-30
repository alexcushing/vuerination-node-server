"use strict";

require("regenerator-runtime/runtime");

require("dotenv");

var express = require('express');

var uri = "mongodb+srv://alex:".concat(process.env.MONGO_PW, "@cluster0-althu.mongodb.net/vuerinators?retryWrites=true&w=majority");

var mongoose = require('mongoose');

var Apollo = require('apollo-server-express');

var ApolloServer = Apollo.ApolloServer;

var resolversFile = require('./api/resolvers.js');

var typeDefsFile = require('./api/typeDefs.js');

var resolvers = resolversFile.resolvers;
var typeDefs = typeDefsFile.typeDefs;
var app = express();
mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(function () {
  var server = new ApolloServer({
    typeDefs: typeDefs,
    resolvers: resolvers
  });
  server.applyMiddleware({
    app: app
  });
  app.listen(process.env.PORT || 5000, function () {
    console.log('server on 5😇😇😇');
  });
});