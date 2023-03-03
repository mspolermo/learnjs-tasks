function getSecondsToday () {
    let now = new Date();

    let tommorow = new Date(now.getFullYear (), now.getMonth (), (now.getDay () + 1))

    let difference = Math.round( (tommorow - now) / 1000);

    console.log(difference);
    return difference;
}
  
getSecondsToday ();

