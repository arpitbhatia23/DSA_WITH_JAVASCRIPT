const prompt = require("prompt-sync")();

const num = prompt("enter a number : ");

for (let i = 1; i <= num; i++) {
  for (let j = 1; j <= num - i; j++) {
    process.stdout.write(" ");
  }
  for (let j = 1; j <= i; j++) {
    process.stdout.write("* ");
  }

  console.log();
}
