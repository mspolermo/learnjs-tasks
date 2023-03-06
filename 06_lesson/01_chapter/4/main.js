// function view (list) {
//     let tmp = list;

//     while (tmp) {
//         console.log(tmp.value);
//         tmp = tmp.next;
//     };
// }

function view (list) {
    console.log(list.value); 
    if (list.next) {
        view (list.next);
    }
}

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