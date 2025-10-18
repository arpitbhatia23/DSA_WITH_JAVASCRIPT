const prompt = require("prompt-sync")();

const num = prompt("enter a number : ");

for (let i = 0; i < num; i++) {
  for (let j = 0; j <= i; j++) {
    process.stdout.write("*");
  }
  console.log();
}
