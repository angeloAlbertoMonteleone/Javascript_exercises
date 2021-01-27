// Write a javascript program to extract the first half of a string of even length 

const firsHalfString = (str) => str.slice(0, str.length / 2);
console.log(firsHalfString('Stringa'));
console.log(firsHalfString('String'));
console.log(firsHalfString('Ciao a tutti'));
