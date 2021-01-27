// Write a javascript program to create a new string adding "New!" in front of a given string.
// If the given string begins with "New!" already then return the original string.

const changeString = (str) => {
    if(str.indexOf('New!') === 0) {
        return str;
    } else {
        let newString = `"New!" ${str}`;
        return newString;
    }
}
console.log(changeString('New! Offer'));

