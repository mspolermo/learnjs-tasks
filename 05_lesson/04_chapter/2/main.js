function sumInput() {
    let arr = [];
    let sum = 0;

    while (true) {

        let value = prompt("Введите число", 0);
    
        if (value === "" || value === null || !isFinite(value)) break;
    
        arr.push(+value);
      }
      
    for(let i=0; i<arr.length; i++) {
        sum+=arr[i]
    }
    return sum;
}

console.log(sumInput());