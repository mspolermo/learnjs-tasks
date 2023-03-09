let div = document.createElement('div');

div.style.overflowY = 'scroll';
div.style.width = '50px';
div.style.height = '50px';
div.innerText = 'lorem lorem lorem lorem'


document.body.append(div);
let scrollWidth = div.offsetWidth - div.clientWidth;

console.log(div.clientWidth)
