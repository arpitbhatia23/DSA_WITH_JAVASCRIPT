const prompt = require("prompt-sync")();
let a = prompt("enter a number : ");

for (let i = 1; i <= a; i++) {
  for (let j = 1; j <= a; j++) {
    process.stdout.write("*  ");
  }
  console.log();
}
