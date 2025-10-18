let amount = 5211;

if (amount >= 500) {
  console.log("note of 500", Math.floor(amount / 500));
  amount = amount % 500;
}
if (amount >= 200) {
  console.log("note of 200", Math.floor(amount / 200));
  amount = amount % 200;
}
if (amount >= 100) {
  console.log("note of 100", Math.floor(amount / 100));
  amount = amount % 100;
}
if (amount >= 50) {
  console.log("note of 50", Math.floor(amount / 50));
  amount = amount % 50;
}
if (amount >= 20) {
  console.log("note of 20", Math.floor(amount / 20));
  amount = amount % 20;
}
if (amount >= 10) {
  console.log("note of 10", Math.floor(amount / 10));
  amount = amount % 10;
}
if (amount >= 5) {
  console.log("note of 5", Math.floor(amount / 5));
  amount = amount % 5;
}
if (amount >= 2) {
  console.log("note of 2", Math.floor(amount / 2));
  amount = amount % 2;
}
if (amount >= 1) {
  console.log("note of 1", Math.floor(amount / 1));
  amount = amount % 1;
}

console.log(amount);

// optimize way
let amount2 = 6372;
const notes = [500, 200, 100, 50, 20, 10, 5, 2, 1];
const result = {};
for (const note of notes) {
  const count = Math.floor(amount2 / note);
  if (count > 0) {
    result[note] = count;
    amount2 = amount2 % note;
  }
}

console.log(result);
