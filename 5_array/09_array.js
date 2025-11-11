let arr = [3, 4, 1, 3, 2, -3, 2, -3, 5, -2, 5, -6, -1, -5];
let i = 0;
let min = arr[0];
while (i < arr.length) {
  if (arr[i] < min) {
    min = arr[i];
  }
  i++;
}

console.log(min);
