"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Urinator = void 0;

var mongoose = require('mongoose');

var urinatorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  count: {
    type: Number,
    required: true
  },
  deleted: {
    type: Boolean,
    required: false
  }
});
var Urinator = mongoose.model('Urinator', urinatorSchema);
exports.Urinator = Urinator;