let arr = [10, 30, 40, 50, 60, 90, 70, 1221, 23, 49, 120, 412, 43];

let i = 0;
let j = arr.length - 1;
while (i < j) {
  [arr[i], arr[j]] = [arr[j], arr[i]];
  i++;
  j--;
}

console.log(arr);
