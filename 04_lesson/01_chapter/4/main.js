function multiplyNumeric (Obj) {
    for (let key in Obj) {
        if (typeof Obj[key] == 'number') {
            Obj[key] *= 2;  
          }
    }
}

let menu = {
    width: 200,
    height: 300,
    title: "My menu"
};
  
console.log(menu);
multiplyNumeric(menu);
console.log(menu);