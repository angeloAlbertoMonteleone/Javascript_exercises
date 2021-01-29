"use strict";

var arr = [3, 2, 1, 3];
var empty = [];
var max = Math.max.apply(Math, arr);

for (var _i = 0, _arr = arr; _i < _arr.length; _i++) {
  var value = _arr[_i];

  if (value === max) {
    empty += value;
  }
}

console.log(empty.length); // let max = arr[0];
// let count = 0;
// for(let i = 0; i < arr.length; i++)
//     if(arr[i] > max)
//         max = arr[i];
// for(let i = 0; i < arr.length; i++)
//     if (arr[i] == max)
//         count++;
// console.log(count);
// let max2 = Math.max(...arr);    
// let result = arr.filter(c => c === max2);    
// console.log(result.length);