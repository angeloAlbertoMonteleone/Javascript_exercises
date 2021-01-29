let arr = [
        [3],
        [11,2,4],
        [4,5,6],
        [10,8,-12]
    ];

let rightSum = 0;
let leftSum = 0;
for(let i = 0, j = arr[0].length - 1; i < arr[0].length; j++) {
    leftSum += arr[i][i];
    rightSum += arr[i][j];
}
let diff = leftSum - rightSum;
console.log(Math.abs(diff));

// let firstDig = 0;
// let secDig = 0;
// let n = arr.length;
// for(let i = 0; i < n; i++){
//     firstDig += arr[i][i]; 
//     secDig += arr[i][n-1-i];             
// }
// console.log(Math.abs(firstDig - secDig));

