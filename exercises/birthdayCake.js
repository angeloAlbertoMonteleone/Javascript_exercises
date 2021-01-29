let arr = [3,2,1,3];
let empty = [];
let max = Math.max(...arr);
    for(let value of arr) {
        if(value === max) {
            empty+= value;
        }
    }
    console.log(empty.length);

    
        // let max = arr[0];
        // let count = 0;
        // for(let i = 0; i < arr.length; i++)
        //     if(arr[i] > max)
        //         max = arr[i];
        // for(let i = 0; i < arr.length; i++)
        //     if (arr[i] == max)
        //         count++;
        // console.log(count);
    
        
        // let max2 = Math.max(...arr);    
        // let result = arr.filter(c => c === max2);    
        // console.log(result.length);