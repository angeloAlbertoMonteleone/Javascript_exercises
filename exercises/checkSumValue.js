// Write a javascript program to check tow numbers and return true if one of the number is 100 or if the sum of the two numbers is 100
 
function checkNumbers(num1, num2) {
    let sum = num1 + num2;
    if(num1 == 100 || num2 == 100 || sum == 100) {
        return true;
    } else {
        return false;
    }
}
console.log(checkNumbers(40,40));
