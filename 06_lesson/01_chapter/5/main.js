function view (list) {
  let tmp = list;
  let arr = [];

  while (tmp) {
      arr.push(tmp.value);
      tmp = tmp.next;
  };

  arr = arr.reverse();

  for (let num in arr) {
    console.log(arr[num])
  }

}

// function view (list) {
    
//     if (list.next) {
//         view (list.next);
//     }
//   console.log(list.value);   
// }

let list = {
    value: 1,
    next: {
      value: 2,
      next: {
        value: 3,
        next: {
          value: 4,
          next: null
        }
      }
    }
  };

view(list);