let check = prompt('Кто там?');

if (check == 'Админ') {
    let pass = prompt('Пароль?');
    if (pass == 'Я Главный') {
        console.log('Здравствуйте');
        } else if (pass === '' || pass=== null){
        console.log('Отменено');
        } else {
        console.log('Неверный пароль');
    }
}else if (check === '' || check === null) {
    console.log('Отменено');
} else {
    console.log('Я вас не знаю');
}

