
// Minimum
// The previous chapter introduced the standard function Math.min that returns
// its smallest argument. We can build something like that now. Write a function
// min that takes two arguments and returns their minimum.

const min = (arg1,arg2) => {
    let minResult = Math.min(arg1, arg2);
    return minResult;
}
console.log(min(5,2));

