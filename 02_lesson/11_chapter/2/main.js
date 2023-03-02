let age;

if (!(age>=14 && age<=90)) {
    console.log("Переменная вне диапазоне");
} else {
    console.log("Переменная в диапазоне")
}

//Вариант 2

if (age<14 || age>90) {
    console.log("Переменная вне диапазоне");
} else {
    console.log("Переменная в диапазоне")
}
