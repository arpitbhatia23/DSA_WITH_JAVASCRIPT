const prompt = require("prompt-sync")();

const num = prompt("enter a number : ");
for (let i = 1; i <= num; i++) {
  let ch = 65;
  for (let j = 0; j <= i; j++) {
    process.stdout.write(String.fromCharCode(ch) + " ");
    ch++;
  }
  console.log();
}
