let user = {
    name: "Василий Иванович",
    age: 35
};

let writer = JSON.stringify(user);
console.log(writer);

let reader = JSON.parse(writer);
console.log(reader);
