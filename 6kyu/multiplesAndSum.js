//take multiples of 3 and 5 of a given number and sum them

function solution(number){
    let sum = 0;
    
    for (let i = 1; i < number; i++){
        if (i%3 === 0 || i%5 === 0){
            sum += i;
        }
    }
    
    return sum;
}