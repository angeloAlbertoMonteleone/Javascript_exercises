let alice = 0;
let bob = 0;

let a = [1, 2, 3];
let b = [3, 2, 1];

if(a[0] > b[0]) {
    alice++;
} else if(a[0] < b[0]) {
    bob++;
}
if(a[1] > b[1]) {
    alice++;
} else if(a[1] < b[1]) {
    bob++;
}
if(a[2] > b[2]) {
    alice++;
} else if(a[2] < b[2]) {
    bob++;
}

console.log(alice, bob);
