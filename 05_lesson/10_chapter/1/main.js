let user = {
  name: "John",
  years: 30
};

let {name} = user;
let {years:age} = user;
let {isAdmin = false} = user;

console.log(name);
console.log(age);
console.log(isAdmin);