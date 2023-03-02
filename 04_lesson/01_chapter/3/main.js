function getSumOfSalaries (Obj) { 
    let count = 0;
    for (let key in Obj) {
        count+=Obj[key];
    }
    return count
}

let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}

let sum = getSumOfSalaries(salaries);
console.log (sum);