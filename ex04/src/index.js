function sumFibonacci(num) 
{
    var fib0 = 0;
    var fib1 = 1;
    var fib = 1;
    var sum = fib0;
    while ( fib <= num){
        if(num == 1){
            return 1;
        }
      if (fib % 2) {
          sum += fib1;
      }
      fib = fib0 + fib1;
      fib1 += fib0;
      fib0 = fib1 - fib0;
    }
  
    return sum;
  }
console.log(sumFibonacci(1));
console.log(sumFibonacci(10));
console.log(sumFibonacci(20));
console.log(sumFibonacci(4));
console.log(sumFibonacci(-5));
  module.exports = sumFibonacci;