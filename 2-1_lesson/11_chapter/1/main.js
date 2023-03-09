let coords = body.getBoundingClientRect();

console.log('left,top: ' + [coords.left, coords.top]);
console.log('right,bottom: ' + [coords.right, coords.bottom]);
console.log('lef top corner :' + [coords.left + field.clientLeft, coords.top + field.clientTop]);
console.log('right bottom corner' + [
    coords.right - parseInt(getComputedStyle(field).borderRightWidth),
    coords.bottom - parseInt(getComputedStyle(field).borderBottomWidth)
  ]);
