function isEmpty(Obj) {
    for (let key in Obj){ 
        return false
    }
    return true
}

let schedule = {};

console.log( isEmpty(schedule) ); // true

schedule["8:30"] = "get up";

console.log( isEmpty(schedule) ); // false