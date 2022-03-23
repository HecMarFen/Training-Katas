function divisors(integer) {
    let divisors = []
    //sort the variable in ascendent way
    let sorted = divisors.sort(function(a, b){return a-b})
    //decompose the integrer
    for (let i=1; i<integer; i++ ){
      if(i === integer || i === 1){
        continue;
      }
      //operation = modulo each number to the integrer itself then push
      else if(integer % i === 0){
        divisors.push(i)
      }
    }
    //if the operation is 0 we add them to our variable
    if(divisors.length === 0){
      return (`${integer} is prime`)
    }else{
      return divisors
    }
    //we want the sorted 
    return sorted
};