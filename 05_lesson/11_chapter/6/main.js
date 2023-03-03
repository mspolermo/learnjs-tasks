function getSecondsToday () {
    let now = new Date();

    let today = new Date(now.getFullYear (), now.getMonth (), now.getDate())

    let difference = Math.round( (now - today) / 1000);

    console.log(difference);
    return difference;
}
  
getSecondsToday ();

