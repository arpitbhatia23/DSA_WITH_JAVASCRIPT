// sum of n natural number

let num = Number(7);
let sum = 0;
if (isNaN(num) || num < 0) return console.log("invalid input");
else {
  for (let i = 0; i <= num; i++) {
    sum += i;
  }
}

console.log("sum of n natural number", sum);
