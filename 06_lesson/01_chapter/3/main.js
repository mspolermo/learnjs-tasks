
function fib(num) {
    if (num <= 1) return num;
    return fib(num - 1) + fib(num - 2);
}


console.log(fib(3));
console.log(fib(7));
console.log(fib(77));