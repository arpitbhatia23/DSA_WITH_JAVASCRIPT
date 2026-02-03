const prompt = require("prompt-sync")();

let s = prompt(" enter a string").trim();

function ispallindrome(str) {
  return str.trim() === str.split("").reverse().join("");
}

console.log(ispallindrome(s));

function ispallindrome1(str) {
  let ispall = true;
  let j = str.length - 1;
  let i = 0;
  while (i < j) {
    if (s[i] !== s[j]) {
      ispall = false;
      break;
    }
    i++;
    j--;
  }

  return ispall;
}

console.log(ispallindrome1(s));
