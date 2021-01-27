
const originalArr = [1,2,3,4,5,6];
const fun = (arr) => {
    let arrReduced = arr.reduce((prev, curr) =>
    prev + curr);
    let empty = [];
    empty.push(arrReduced);
    // return empty;
    let newArr = [...empty];
    return newArr;
}
console.log(fun(originalArr));
