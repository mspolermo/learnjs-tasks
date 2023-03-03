function getWeekDay(date) {
    let days = ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'];
    
    console.log(days[date.getDay()]);
    
    return days[date.getDay()];
}
  
let date = new Date(2014, 0, 3); 
getWeekDay(date);

