//  Write a loop that makes seven calls to console.log to output the following
// triangle:#
// ##
// ###
// ####
// #####
// ######
// #######
// 37
// It may be useful to know that you can find the length of a string by writing
// .length after it.

let abc = "abc";
console.log(abc.length);
// → 3 

let str = "#";
let count = "";
for(let i = 0; i < str.length; i++) { 
    count += str;
    console.log(count);
}
