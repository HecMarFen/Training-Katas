function squareDigits(num){
    //separate each number with space
    return Number(('' + num)
                  //split creates a string separated bty the space 
                  .split('')
                  //map or loop over the string and squeare it
                  .map(function (val) { return val * val;})
                  // join concatenates the string without spaces
                  .join(''));
}