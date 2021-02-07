
// Minimum
// The previous chapter introduced the standard function Math.min that returns
// its smallest argument. We can build something like that now. Write a function
// min that takes two arguments and returns their minimum.

const min = (num1,num2) => {
    let minimum = 0;
    if(num1 < num2) {
        return minimum += num1;
    } if(num2 < num1) {
        return minimum += num2;
    } else {
        return `the numbers are the same!`
    }
}
console.log(min(7, 5))

// const min = (arg1,arg2) => {
//     let minResult = Math.min(arg1, arg2);
//     return minResult;
// }
// console.log(min(5,2));
