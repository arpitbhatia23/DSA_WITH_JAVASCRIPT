let rem;
let sum = 0;
let n = 145;
let fact = 1;
while (n > 0) {
  rem = n % 10;
  for (let i = 1; i <= rem; i++) {
    fact *= i;
  }
  sum += fact;
  n = Math.floor(n / 10);
}
console.log(sum);
