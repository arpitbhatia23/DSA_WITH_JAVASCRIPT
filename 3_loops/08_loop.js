let rem;
let rev = 0;
let n = 2001;
while (n > 0) {
  rem = n % 10;
  rev = rev * 10 + rem;
  n = Math.floor(n / 10);
}
console.log(rev);
