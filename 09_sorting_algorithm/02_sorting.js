let arr = [10, 5, 1, 12, 3];
let n = arr.length;
for (let i = 0; i < n - 1; i++) {
  let min = i;
  for (let j = i + 1; j < n; j++) {
    if (arr[min] > arr[j]) {
      min = j;
    }
    if (arr[min] != i) {
      [arr[min], arr[i]] = [arr[i], arr[min]];
    }
  }
}

console.log(arr);
