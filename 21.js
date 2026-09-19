let arr = [-3, 5, -1, 8.9, 0];

let max;
let sum = 0;

for (let i in arr) {
  sum += arr[i];
}

let avrg = sum / arr.length;

console.log("And the average is:", Math.round(avrg * 100) / 100);
