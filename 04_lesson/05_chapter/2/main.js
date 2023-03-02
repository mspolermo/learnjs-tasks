function Accumulator(startingValue) {

this.startingValue = startingValue;
this.value = this.startingValue;

this.read = function () {
  this.value += +prompt('Введите число')
};
};

let accumulator = new Accumulator(1)

console.log( accumulator.value );
accumulator.read();
console.log( accumulator.value );
accumulator.read();
console.log( accumulator.value );