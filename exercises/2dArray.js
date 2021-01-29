let arr = [
    [1,1,1,0,0,0],
    [0,1,0,0,0,0],
    [1,1,1,0,0,0],
    [0,0,2,4,4,0],
    [0,0,0,2,0,0],
    [0,0,1,2,4,0]
];

let sumArray = [];
let i = 0;
let j = 0;
let x = 0;

while(x < 16) {
    if(x == 4 || x == 8 || x == 12) {
        i++;
        j=0;
    }
    let sum = arr[i][j] + arr[i][j+1] + arr[i][j+2] + arr[i+1][j+1] + arr[i+2][j] + arr[i+2][j+1] + arr[i+2][j+2];
    sumArray.push(sum);
    j++;
    x++;
}

console.log(Math.max(...sumArray));