let arr = [0, 0, 1, 1, 2, 2, 1, 2, 1];
function colorsort(colors) {
  let j = 1;
  for (let i = 0; i < colors.length; i++) {
    if (arr[i] - arr[j] < arr[i]) {
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    j++;
  }
  return arr;
}

console.log(colorsort(arr));
