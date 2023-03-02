function filterRangeInPlace(arr, a, b) {
    for (let i=0; i<arr.length; i++) {

    let finder = arr.findIndex(item => ((item < a) || (item > b)));
    arr.splice(finder, 1);
    }
}

let arr = [5, 3, 8, 1];
filterRangeInPlace(arr, 1, 4);

console.log(arr);
