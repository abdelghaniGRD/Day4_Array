let arr = [-3, 5, -1, 8, 0];

let max;
let sum = 0;

function AverageExMax(T) {
  max = T[0];
  for (let i in T) {
    if (T[i] > max) {
      max = T[i];
    }

    sum += T[i];
  }
  sum -= max;
  return sum / (T.length - 1);
}

console.log("And the average is:", AverageExMax(arr));
