function makeCounter() {

  function counter() {
    return counter.count++;
  };
  counter.set = value => count = value;
  counter.decrease = () => count--;
  
  counter.count = 0;

  return counter;
}

let counter = makeCounter();
counter.count = 20;

console.log(counter());
