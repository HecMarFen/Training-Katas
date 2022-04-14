
function isPrime(num) {
    if(num < 2){
      return false;
    }
    //By doing the square root of a number we make it smaller so the code is more agile
    // thus the computer can read it faster
    const smallNum = Math.sqrt(num);
    //We loop over the decompose number of the smaller number
    for(let i=2; i<= smallNum; i++){
     //However we check that our given number is divisble by i(which now is smaller) than looping over num itself
       if(num % i === 0){
         return false
       }
    }
    return true
}