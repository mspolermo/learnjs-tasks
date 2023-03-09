let list = document.getElementsByTagName('li');

for (let li of list) {

  let descendantsCount = li.getElementsByTagName('li').length;
  
  if (!descendantsCount) continue;


  li.firstChild.data += ' [' + descendantsCount + ']';
}