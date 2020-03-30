"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.typeDefs = void 0;

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  type Urinator {\n    id: ID!\n    name: String!\n    deleted: Boolean\n    count: Int!\n  }\n  type Query {\n    urinators: [Urinator!]!\n    urinator(name: String!): Urinator!\n  },\n  type Mutation {\n    addUrinator(name: String!): Urinator,\n    addPee(name: String!): Urinator,\n    removePee(name: String!): Urinator\n    removeUrinator(name: String!): Urinator\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var _require = require('apollo-server-express'),
    gql = _require.gql;

var typeDefs = gql(_templateObject());
exports.typeDefs = typeDefs;