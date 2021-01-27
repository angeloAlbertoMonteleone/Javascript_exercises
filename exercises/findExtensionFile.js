
// Write a javascript program to get the extension of a filename    

const getFileExtension = (str) => str.slice(str.lastIndexOf('.'));
console.log(getFileExtension('index.css'));
