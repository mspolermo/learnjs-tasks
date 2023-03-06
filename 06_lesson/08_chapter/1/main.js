// Version 1
// function printNumbers(from, to) {

//   let timerId = setInterval(function() {

//     console.log(from);

//     if (from == to) {
//       clearInterval(timerId);
//     }
//     from++;
//   }, 1000);
// }

//Version 2
function printNumbers(from, to) {

setTimeout(function start () {
  console.log(from);
  if (from < to) {
    setTimeout (start, 1000)
  };
  from++;
  }, 1000);
}


printNumbers(4, 8)