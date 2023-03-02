let n=10;
let i=2;

let result = '';

Label:
for (; i <= n; i++) { 
  for (let j = 2; j < i; j++) { 
    if (i % j == 0) continue Label;
  };
result+= String(i) +' ';
}
console.log(result);