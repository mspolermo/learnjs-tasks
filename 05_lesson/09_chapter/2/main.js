function count(user) {
    let sum = 0;

    for( let key of Object.keys(user)) {
        if (key in user == true) {
          sum ++;  
        }
    }
    console.log (sum)
}

let user = {
    name: 'John',
    age: 30,
  };

count(user);