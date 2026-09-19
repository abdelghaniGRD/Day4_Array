let arr = [-3, 5, -1, 8, 0];
let range;

let max, min;
for (let i in arr) {
  if (i == 0) {
    max = arr[i];
    min = arr[i];
  }

  if (arr[i] > max) max = arr[i];

  if (arr[i] < min) min = arr[i];
}

console.log("the min is", min);
console.log("the max is", max);
console.log("so the range is", max - min);
