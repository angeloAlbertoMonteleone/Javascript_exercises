// Write a Javascript program to create a new string from a given string taking the first 3 characters and the last 3 characters of a string and adding them togheter. Thre string length must be 3 or more, if not, the orginal string is returned.

const creatNewString = str => 
    str.length < 3 ? str : str.slice(0,3) + str.slice(-3);
console.log(creatNewString('Ciaoatutti'));
console.log(creatNewString('abcde123'));
console.log(creatNewString('1234xjnejnjj345'));
