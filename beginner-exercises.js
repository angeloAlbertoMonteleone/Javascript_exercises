{"use strict"};

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

let str = "#";
let count = "";
for(let i = 0; i < str.length; i++) { 
    count += str;
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
    }else {
        console.log(i);
    }
}*/




/* 
create a program that makes an array with numbers, and returns the max and min value;
const maxValue = (arr) => {
    let max = [];
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
        console.log(minValue([4,1,2,5,3,5,0,7]))  */







/*     Minimum
The previous chapter introduced the standard function Math.min that returns
its smallest argument. We can build something like that now. Write a function
min that takes two arguments and returns their minimum.

const min = (arg1,arg2) => {
    let minResult = Math.min(arg1, arg2);
    return minResult;
}
console.log(min(5,2));*/





/* Define a recursive function isEven corresponding to this description. The
function should accept a single parameter (a positive, whole number) and return
a Boolean.
Test it on 50 and 75. See how it behaves on -1. Why? Can you think of a
way to fix this? 

function isEven(num) {
    if (num == 0) {
        return true;
    } else if (num == 1) {
        return false;
    }
    else if (num < 0) {
        return isEven(-num);
    }
    else {
        return isEven(num - 2);
    }
  }
  console.log(isEven(50));
  console.log(isEven(75));
  console.log(isEven(-1));
 */







/* You can get the Nth character, or letter, from a string by writing "string"[N].
The returned value will be a string containing only one character (for example,
"b"). The first character has position 0, which causes the last one to be found at
position string.length - 1. In other words, a two-character string has length
2, and its characters have positions 0 and 1.
Write a function countBs that takes a string as its only argument and returns
a number that indicates how many uppercase “B” characters there are in the
string.
Next, write a function called countChar that behaves like countBs, except
it takes a second argument that indicates the character that is to be counted
(rather than counting only uppercase “B” characters). Rewrite countBs to
make use of this new function. */

let string = "ciAo sono AngelO";

function countBs (str) {
    let countUpp = 0;
    let newStr = '';
    for(let i = 0; i < str.length; i++) {
        if(str.charAt(i) == str.charAt(i).toUpperCase() && str.charAt(i) !== ' ') {
            countUpp += str.charAt(i).length;
        }
    }    
    return countUpp;
}  

function countChar (str2) {;
    let countChar = '';
    for(let j = 0; j < str2.length; j++) {
        countChar += str2.charAt(j);
    }
    return countChar;
}   

console.log(countBs(string), countChar(string));








/* We want to write a program that prints two numbers: the numbers of cows
and chickens on a farm, with the words Cows and Chickens after them and zeros
padded before both numbers so that they are always three digits long.
007 Cows
011 Chickens
This asks for a function of two arguments—the number of cows and the
number of chickens. Let’s get coding.

EXAMPLE 1
function printFarmInventory(cows, chickens) {
let cowString = String(cows);
while (cowString.length < 3) {
cowString = "0" + cowString;
}
console.log(`${cowString} Cows`);
let chickenString = String(chickens);
while (chickenString.length < 3) {
chickenString = "0" + chickenString;
}
console.log(`${chickenString} Chickens`);
}

EXAMPLE 2
function zeroPad(number, width) {
    let string = String(number);
    while (string.length < width) {
    string = "0" + string;
    }
    return string;
    }
    function printFarmInventory(cows, chickens, pigs) {
    console.log(`${zeroPad(cows, 3)} Cows`);
    console.log(`${zeroPad(chickens, 3)} Chickens`);
    console.log(`${zeroPad(pigs, 3)} Pigs`);
    }
    printFarmInventory(7, 16, 3);
*/

