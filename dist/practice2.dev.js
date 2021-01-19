/* ESERCITAZIONE JAVASCRIPT ONLINE
  
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
*/
"use strict";