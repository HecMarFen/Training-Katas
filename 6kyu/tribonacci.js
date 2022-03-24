function tribonacci(signature,n){
    //create an array with the signature values
    let arr = []
    arr[0]=signature[0]
    arr[1]=signature[1]
    arr[2]=signature[2]
    
    //sum the three last values and add it to the arr created
    //we start im i = 3 because the first three values of the array are already given
    for (let i = 3; i <n; i++){
      arr[i] = arr[i-3] + arr[i - 2] + arr[i - 1]
    }
    return arr
}

