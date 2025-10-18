const prompt = require("prompt-sync")();

const num = prompt("enter a number : ");

for (let i = 1; i <= num; i++) {
  for (let j = 1; j <= i; j++) {
    process.stdout.write(j + " ");
  }
  console.log();
}
