let arr = [-3, 5, -1, 8, 0];

let max;
let sum = 0;

for (let i in arr) {
  if (i == 0) max = arr[i];

  if (arr[i] > max) {
    max = arr[i];
  }

  sum += arr[i];
}

console.log("sum before removing the max val", sum);

sum -= max;

console.log("sum after removing the max val", sum);

let avrg = sum / arr.length;

console.log("And the average is:", avrg);
