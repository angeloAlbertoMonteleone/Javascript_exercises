
// create a program that makes an array with numbers, and returns the max and min value;
const maxValue = (arr) => {
    let max = [];
        for (let val of arr) {
          if(val > max)  {
              max = val;
          }
        }
        for (let val of arr) {
            if(val > max)  {
                max = val;
            }
        }
        return max;

    }
    console.log(maxValue([1,2,3,4,5,6,7]))

    const minValue = (arr) =>{
        let min = arr[0];
        for (let i = 1; i < arr.length; i++) {
            if(arr[i] < min) {
                min = arr[i];
            }
        }
        return min;
    }
        console.log(minValue([4,1,2,5,3,5,0,7]))  

