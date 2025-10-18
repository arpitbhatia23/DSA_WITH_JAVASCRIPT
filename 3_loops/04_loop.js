// is prime

const number = 21;
let isPrime = true;
for (let i = 2; i <= Math.floor(number / 2); i++) {
  if (number % i == 0) {
    isPrime = false;
    break;
  }
}

console.log(isPrime);

function isprimen(n) {
  if (n <= 1) return false;
  if (n == 2) return true;
  if (n % 2 == 0) return false;
  for (let i = 3; i <= Math.floor(Math.sqrt(n)); i++) {
    if (n % i == 0) return false;
  }
  return true;
}

console.log(isprimen(17));
