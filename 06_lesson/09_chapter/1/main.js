function spy(func) {
  wrapper.calls = [];  

  function wrapper(...args) {
    wrapper.calls.push(args);
    return func.apply(this, args);
  }
  return wrapper;
}

function work(a, b) {
  console.log( a + b );
}

work = spy(work);

work(2, 4);
work(4, 5);

for (let args of work.calls) {
  console.log( 'call:' + args);
}