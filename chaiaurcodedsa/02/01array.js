let num; // 1 unit
let arr = Array(1, 2, 3, 4); // 1 unit
console.log(arr); //1 unit

// time complexit  O(1)

let print = ""; // 1 unit
for (let i in arr) {
  // n times
  print += arr[i] + " "; // 4 times
}

// time complexit  1 + n =  O(n)
console.log(print); // 1 unit
print = ""; // 1 unit

// time complexit  O(1)
for (j in arr) {
  // n times
  print += arr[j] + " "; // 4 times
}

// time complexit = O(n)

console.log(print); // 1 unit

console.log("time complexity of this code is linear time complexity = O(n)");
