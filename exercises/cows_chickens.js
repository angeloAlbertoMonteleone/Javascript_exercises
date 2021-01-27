
// We want to write a program that prints two numbers: the numbers of cows
// and chickens on a farm, with the words Cows and Chickens after them and zeros
// padded before both numbers so that they are always three digits long.
// 007 Cows
// 011 Chickens
// This asks for a function of two arguments—the number of cows and the
// number of chickens. Let’s get coding.

// EXAMPLE 1

function printFarmInventory(cow, chicken) {
let cowString = String(cow);
while (cowString.length < 3) {
cowString = "0" + cowString;
}
console.log(`${cowString} Cows`);
let chickenString = String(chicken);
while (chickenString.length < 3) {
chickenString = "0" + chickenString;
}
console.log(`${chickenString} Chickens`);
}

// EXAMPLE 2

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


