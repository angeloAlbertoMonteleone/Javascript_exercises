"use strict";

var arr = [10, 20, 20, 10, 10, 30, 50, 10, 20];
arr.sort();
var previous;
var newArr = arr.reduce(function (acum, current) {
  if (current === previous) {
    previous = "";
    acum += 1;
  } else {
    previous = current;
  }

  return acum;
}, 0);
console.log(newArr); // function sockMerchant(n, ar) {
//     var res = 0;
//         ar.sort();
//         for(let i=0; i<n;i++){
//             if(ar[i] == ar[i+1]){
//                 i++;
//                 res++;
//                }
//         }
//     return res;
//     }