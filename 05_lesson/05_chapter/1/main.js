function camelize(str) {
    str = str.split('-');

    for (let i=1; i<str.length; i++) {
        str[i] = str[i][0].toUpperCase() + str[i].slice(1, str[i].length);
    }

    str = str.join('')
    
    return str
}

console.log(camelize("background-color"));
console.log(camelize("list-style-image"));
console.log(camelize("-webkit-transition"));