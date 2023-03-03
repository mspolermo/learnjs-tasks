function getDateAgo(date, days) {
    let copyDate = new Date(date);

    copyDate.setDate(date.getDate() - days);

    console.log(copyDate.getDate());
    return copyDate.getDate()
}
  
let date = new Date(2012, 0, 1); 
getDateAgo(date, 3);

