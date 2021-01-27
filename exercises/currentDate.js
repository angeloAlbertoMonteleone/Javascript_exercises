// Write a Javascript program to get the current date. Expected Output:
// mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy


const getDate = (date = new Date()) => {
    const days = date.getDate();
    const months = date.getMonth() + 1;
    const years = date.getFullYear();
    return `today is: ${days}/${months}/${years}`;
}
console.log(getDate());
