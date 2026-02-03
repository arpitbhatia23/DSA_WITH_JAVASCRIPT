const prompt = require("prompt-sync")();

let s = prompt(" enter a string").trim();

let toggle = "";

for (let i = 0; i < s.length; i++) {
  if (s.charCodeAt(i) >= 65 && s.charCodeAt(i) <= 90) {
    toggle += String.fromCharCode(s.charCodeAt(i) + 32);
  } else if (s.charCodeAt(i) >= 97 && s.charCodeAt(i) <= 122) {
    toggle += String.fromCharCode(s.charCodeAt(i) - 32);
  }
}

console.log(toggle);
