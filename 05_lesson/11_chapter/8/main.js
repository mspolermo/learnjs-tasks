function formatDate (date) {
    let answer;
    let difference = new Date() - date;
    
    if (difference < 1000) {
        answer = 'прямо сейчас';
    } else if ((difference < (60 * 1000))){
        answer = Math.floor(difference / 1000) + ' сек. назад';
    } else if ((difference < (60 * 60 * 1000))){
        answer = Math.floor(difference / (60 * 1000)) + ' мин. назад';
    } else {
        answer = date;
        answer = [
            '0' + answer.getDate(),
            '0' + (answer.getMonth() + 1),
            '' + answer.getFullYear(),
            '0' + answer.getHours(),
            '0' + answer.getMinutes()
        ].map(component => component.slice(-2)); 

        answer = answer.slice(0, 3).join('.') + ' ' + answer.slice(3).join(':');
    }

    console.log (answer);
    return answer;
}

  
formatDate (new Date(new Date - 1));
formatDate(new Date(new Date - 30 * 1000)); 
formatDate(new Date(new Date - 5 * 60 * 1000));
formatDate(new Date(new Date - 86400 * 1000));

