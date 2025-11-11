// remove duplicated from sorted array
let arr = [1, 1, 2, 2, 2, 3, 3, 4, 4, 5, 6, 7, 7, 8, 8, 8, 9];
function removeduplicate() {
  let j = 1;
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] != arr[i + 1]) {
      arr[j] = arr[i + 1];
      j++;
    }
  }
  return j;
}

console.log(removeduplicate(arr));
