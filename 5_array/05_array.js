let arr = [10, 30, 40, 50, 60, 90, 70, 1221, 23, 49, 120, 412, 43];
let max = arr[0];
let secondmax = arr[1];
let i = 0;
while (i < arr.length) {
  if (max < arr[i]) {
    max = arr[i];
  } else if (secondmax < arr[i]) {
    secondmax = arr[i];
  }
  i++;
}

console.log(max, secondmax);
