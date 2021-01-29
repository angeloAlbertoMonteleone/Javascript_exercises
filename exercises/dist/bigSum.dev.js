"use strict";

var arr = [1000000001, 1000000002, 1000000003, 1000000004, 1000000005];
var sum = 0;

for (var _i = 0, _arr = arr; _i < _arr.length; _i++) {
  var value = _arr[_i];
  sum += value;
}

console.log(sum);