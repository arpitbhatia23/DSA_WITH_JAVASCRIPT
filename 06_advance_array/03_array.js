const prompt = require("prompt-sync")();

let arr = [1, 2, 3, 4, 5];
let k = Number(prompt("enter a value"));
k = k % arr.length;
reverse(0, k - 1);
reverse(k, arr.length - 1);
reverse(0, arr.length - 1);
console.log(arr);

function reverse(i, j) {
  while (i < j) {
    [arr[i], arr[j]] = [arr[j], arr[i]];
    i++;
    j--;
  }
}
