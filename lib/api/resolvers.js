"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.resolvers = void 0;

var _Urinator = require("./Models/Urinator.js");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var resolvers = {
  Query: {
    urinators: function urinators() {
      return _Urinator.Urinator.find();
    },
    urinator: function urinator(_, args) {
      return _Urinator.Urinator.findOne({
        name: args.name
      });
    }
  },
  Mutation: {
    addUrinator: function () {
      var _addUrinator = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(_, _ref) {
        var name, person;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                name = _ref.name;
                person = new _Urinator.Urinator({
                  name: name,
                  count: "0"
                });
                person.save();
                return _context.abrupt("return", person);

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function addUrinator(_x, _x2) {
        return _addUrinator.apply(this, arguments);
      }

      return addUrinator;
    }(),
    removeUrinator: function () {
      var _removeUrinator = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(_, _ref2) {
        var name, person;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                name = _ref2.name;
                _context2.next = 3;
                return _Urinator.Urinator.findOne({
                  name: name
                });

              case 3:
                person = _context2.sent;
                person.deleted = true;
                person.save();
                return _context2.abrupt("return", person);

              case 7:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function removeUrinator(_x3, _x4) {
        return _removeUrinator.apply(this, arguments);
      }

      return removeUrinator;
    }(),
    addPee: function () {
      var _addPee = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(_, _ref3) {
        var name, person;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                name = _ref3.name;
                _context3.next = 3;
                return _Urinator.Urinator.findOne({
                  name: name
                });

              case 3:
                person = _context3.sent;
                person.count++;
                person.save();
                return _context3.abrupt("return", person);

              case 7:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      function addPee(_x5, _x6) {
        return _addPee.apply(this, arguments);
      }

      return addPee;
    }(),
    removePee: function () {
      var _removePee = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(_, _ref4) {
        var name, person;
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                name = _ref4.name;
                _context4.next = 3;
                return _Urinator.Urinator.findOne({
                  name: name
                });

              case 3:
                person = _context4.sent;
                person.count--;
                person.save();
                return _context4.abrupt("return", person);

              case 7:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }));

      function removePee(_x7, _x8) {
        return _removePee.apply(this, arguments);
      }

      return removePee;
    }()
  }
};
exports.resolvers = resolvers;