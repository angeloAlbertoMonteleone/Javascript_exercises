"use strict";

{
  "use strict";
}
;
/* JAVASCRIPT EXERCISE ONLINE
  
Write a javascript program to check tow numbers and return true if one of the number is 100 or if the sum of the two numbers is 100
 
function checkNumbers(num1, num2) {
    let sum = num1 + num2;
    if(num1 == 100 || num2 == 100 || sum == 100) {
        return true;
    } else {
        return false;
    }
}
console.log(checkNumbers(40,40));


Write a javascript program to get the extension of a filename    

const getFileExtension = (str) => str.slice(str.lastIndexOf('.'));
console.log(getFileExtension('index.css'));

   

Write a Javascript program to replace every character in a given string with the character following it in the alphabet

let string = 'Ciao';
const moveCharsForward = (str) => str.split('')
.map(char => 
    String.fromCharCode(char.charCodeAt(0) + 1)).join('');
console.log(moveCharsForward(string));


Write a Javascript program to get the current date. Expected Output:
mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy


const getDate = (date = new Date()) => {
    const days = date.getDate();
    const months = date.getMonth() + 1;
    const years = date.getFullYear();
    return `today is: ${days}/${months}/${years}`;
}
console.log(getDate());


Write a javascript program to create a new string adding "New!" in front of a given string.
If the given string begins with "New!" already then return the original string.

const changeString = (str) => {
    if(str.indexOf('New!') === 0) {
        return str;
    } else {
        let newString = `"New!" ${str}`;
        return newString;
    }
}
console.log(changeString('New! Offer'));


Write a Javascript program to create a new string from a given string taking the first 3 characters and the last 3 characters of a string and adding them togheter. Thre string length must be 3 or more, if not, the orginal string is returned.


const creatNewString = str => 
    str.length < 3 ? str : str.slice(0,3) + str.slice(-3);
console.log(creatNewString('Ciaoatutti'));
console.log(creatNewString('abcde123'));
console.log(creatNewString('1234xjnejnjj345'));
*/

/* Write a javascript program to extract the first half of a string of even length 


const firsHalfString = (str) => str.slice(0, str.length / 2);
console.log(firsHalfString('Stringa'));
console.log(firsHalfString('String'));
console.log(firsHalfString('Ciao a tutti'));
*/

/* Write a Javascript program to concatenate two strings 

const concatenation = (str1 , str2) => {
    let newStr = str1.concat(str2);
    return newStr;
}
console.log(concatenation("Ciao", "Mom"));
 */

/* Write a loop that makes seven calls to console.log to output the following
triangle:
#
##
###
####
#####
######
#######
37
It may be useful to know that you can find the length of a string by writing
.length after it.
let abc = "abc";
console.log(abc.length);
// → 3 

let str = "#######";
let count = "";
for(let i = 0; i < str.length; i++) { 
    count+= i;
    console.log(count);
}*/

/* Write a program that uses console.log to print all the numbers from 1 to 100,
with two exceptions. For numbers divisible by 3, print "Fizz" instead of the
number, and for numbers divisible by 5 (and not 3), print "Buzz" instead.
When you have that working, modify your program to print "FizzBuzz" for
numbers that are divisible by both 3 and 5 (and still print "Fizz" or "Buzz"
for numbers divisible by only one of those).
(This is actually an interview question that has been claimed to weed out
a significant percentage of programmer candidates. So if you solved it, your
labor market value just went up.)

for(let i = 1; i <= 100; i++) {
    if(i % 3 == 0) {
        console.log("Fizz")
    } if (i % 5 == 0) {
        console.log("Buzz");
    } if (i % 3 == 0 && i % 5 == 0) {
        console.log("FizzBuzz");
    }
}*/

/* Write a program that creates a string that represents an 8×8 grid, using newline
characters to separate lines. At each position of the grid there is either a space
or a "#" character. The characters should form a chessboard.
Passing this string to console.log should show something like this:
# # # #
 # # # #
# # # #
 # # # #
# # # #
 # # # #
# # # #
 # # # #

When you have a program that generates this pattern, define a binding size
= 8 and change the program so that it works for any size, outputting a grid
of the given width and height. */

/* 
let size = 8;
let str = '';
let stringa = "CiaoAngeCiaoAngeCiaoAngeCiaoAngeCiaoAngeCiaoAngeCiaoAngeCiaoAnge";
for(let i = 0; i <= stringa.length; i++) {
    if(i % 2 == 0 && i % 4 == 0) {
        console.log(" ");
    }

    console.log(i);
}
 */

/* 
create a program that makes an array with numbers, and returns the max and min value; */

/* 
const maxValue = (arr) => {
    let max = [];
    let min;
        for (let val of arr) {
          if(val > max)  {
              max = val;
          }
        }
        for (let val of arr) {
            if(val > max)  {
                max = val;
            }
        }
        return max;
        return min;
    }

    console.log(maxValue([1,2,3,4,5,6,7]))


    const minValue = (arr) =>{
        let min = arr[0];
        for (let i = 1; i < arr.length; i++) {
            if(arr[i] < min) {
                min = arr[i];
            }
        }
        return min;
    }

        console.log(minValue([4,1,2,5,3,5,0,7]))
    */