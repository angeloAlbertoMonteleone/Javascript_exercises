"use strict";
/* 
creare due moduli js e nel primo creare tutte le operazioni di una calcolatrice somma, sottrazione, divisione, moltiplicazione */

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sub = exports.sum = exports.div = exports.mult = void 0;

var mult = function mult(a, b) {
  return a * b;
};

exports.mult = mult;

var div = function div(a, b) {
  return a / b;
};

exports.div = div;

var sum = function sum(a, b) {
  return a + b;
};

exports.sum = sum;

var sub = function sub(a, b) {
  return a - b;
};

exports.sub = sub;