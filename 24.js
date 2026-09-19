let arr = [4, 10, 2, 9, 1];

let sum = 0;
let max = 0;
let min;

for (let i in arr) {
  if (i == 0) min = arr[i];

  sum += arr[i];

  if (arr[i] < min) min = arr[i];

  if (arr[i] > max) max = arr[i];
}

let avrg = sum / arr.length;
console.log("sum:", sum);
console.log("average:", avrg);
console.log("min:", min);
console.log("max:", max);
