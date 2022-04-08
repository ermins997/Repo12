// Only change code below this line
function myRecursion(arr, n) {
    if (n <= 0) {
      return 0;
    }
    console.log(arr);
    return arr.shift() + myRecursion(arr, n - 1);
    
  }
  
  console.log(myRecursion([1], 0));
  console.log(myRecursion([1, 2, 3, 4], 2));
  console.log(myRecursion([1, 2, 3, 4], 3));
  console.log(myRecursion([1, 2, 3, 4, 5, 6], 5));
  
  // Only change code above this line
  module.exports = myRecursion;