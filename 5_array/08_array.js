let arr = [3, 4, 1, 3, 2, -3, 2, -3, 5, -2, 5, -6, -1, -5];
let i = 0;
let j = 0;
while (i < arr.length) {
  if (arr[i] < 0) {
    [arr[i], arr[j]] = [arr[j], arr[i]];
    j++;
  }
  i++;
}

console.log(arr);
