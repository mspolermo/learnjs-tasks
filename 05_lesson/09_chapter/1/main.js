function sumSalaries(salaries) {
    let sum = 0;

    for( let money of Object.values(salaries)) {
        sum += money;
    }
    return sum;
}

let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};
  
sumSalaries(salaries);