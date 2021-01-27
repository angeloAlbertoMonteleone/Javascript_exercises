// Define a recursive function isEven corresponding to this description. The
// function should accept a single parameter (a positive, whole number) and return
// a Boolean.
// Test it on 50 and 75. See how it behaves on -1. Why? Can you think of a
// way to fix this? 

function isEven(num) {
    if (num == 0) {
        return true;
    } else if (num == 1) {
        return false;
    }
    else if (num < 0) {
        return isEven(-num);
    }
    else {
        return isEven(num - 2);
    }
  }
  console.log(isEven(50));
  console.log(isEven(75));
  console.log(isEven(-1));
 