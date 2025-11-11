const prompt = require("prompt-sync")();
let arr = [];

let element;
let i = 0;
while (true) {
  element = Number(prompt("enter a element : "));
  if (element == "exit" || element == "Exit") break;
  arr[i] = element;
  i++;
}
console.log(arr);
