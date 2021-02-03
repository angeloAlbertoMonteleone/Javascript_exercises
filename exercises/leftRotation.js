let arr = [1,2,3,4,5];
let d = 4;

let newArr = arr.concat();
for(let i = 0; i < d; i++) {
    let value = newArr.shift();
    newArr.push(value);
}
console.log(newArr);

