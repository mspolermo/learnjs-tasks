function getAverageAge(arr) {
    return arr.reduce((prev, arr) => prev + arr.age, 0) / arr.length;
}

let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 29 };

let arr = [ vasya, petya, masha ];

console.log(getAverageAge(arr));