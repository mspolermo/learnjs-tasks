function Calculator () {
    this.methods = {
        "-": (a, b) => a - b,
        "+": (a, b) => a + b
      };
    this.calculate = function(str) {

        let split = str.split(' '),
            a = +split[0],
            op = split[1],
            b = +split[2]

        if (!this.methods[op] || isNaN(a) || isNaN(b)) {
            return NaN;
        }

        return this.methods[op](a, b);
    }
    this.addMethod = function(name, func) {
        this.methods[name] = func;
    };
}

let calc = new Calculator;

console.log(calc.calculate("2 + 7"));

let powerCalc = new Calculator;
powerCalc.addMethod("*", (a, b) => a * b);
powerCalc.addMethod("/", (a, b) => a / b);
powerCalc.addMethod("**", (a, b) => a ** b);

console.log(powerCalc.calculate("5 * 3"));
console.log(powerCalc.calculate("100 / 10"));
console.log(powerCalc.calculate("4 ** 2"));