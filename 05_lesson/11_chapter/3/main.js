function getWeekDay(date) {
    let currentDay = date.getDay();

    if (currentDay ==  0) {
        currentDay = 7
    }
    console.log(currentDay);
    return currentDay;
}
  
let date = new Date(2012, 0, 8); 
getWeekDay(date);

