// sum of to interger

let a = 10;
let b = 20;
console.log(`sum of ${a} and ${b} is :`, a + b);

//conversion
let age; //= prompt("what is you age");
console.log(typeof age); // string
age = Number(age);
console.log(age); // number

// swap to number

let glass1 = 2;
let glass2 = 4;
let glass3 = glass1; // glass3 is 2
glass1 = glass2; // glass1 is 4
glass2 = glass3; // glass is 2

console.log(glass1, glass2);

// or

[glass1, glass2] = [glass2, glass1]; // desturcting

console.log(glass1, glass2);

// or  mathamatical method

glass1 = glass1 + glass2; // 2 +4 =6 glass1=6
glass2 = glass1 - glass2; // 6-4 =2 glass2=2
glass1 = glass1 - glass2; // 6-2=4 glass1=4

console.log(glass1, glass2);
