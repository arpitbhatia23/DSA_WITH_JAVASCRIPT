// factor of number

const num = 36;
let factor;

for (let i = 2; i <= Math.floor(num / 2); i++) {
  if (num % i === 0) {
    console.log(i);
  }
}
console.log(num);
