// Variant 1
// function sumTo(num) {
//     let sum = 0;
//     for (let i=0; i<=num; i++) {
//         sum= sum + i;
//     }
// return sum;
// }

// Variant 2
// function sumTo(num) {
//     if (num == 1) return 1;
//     return num + sumTo(num - 1); 
// }

function sumTo(n) {
    return n * (n + 1) / 2;
}


console.log(sumTo(2));
console.log(sumTo(3));
console.log(sumTo(4));
console.log(sumTo(100));