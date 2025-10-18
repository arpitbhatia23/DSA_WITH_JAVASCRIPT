const prompt = require("prompt-sync")();

const num = prompt("enter a number : ");
let ch = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "j",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "z",
];
for (let i = 1; i <= num; i++) {
  for (let j = 0; j <= i; j++) {
    process.stdout.write(ch[j] + " ");
  }
  console.log();
}
