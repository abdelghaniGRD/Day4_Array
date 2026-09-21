//not completed yet

let arr = [3, 9, 1, 7];
let min;

for (let i in arr) {
  if (i == 0) {
    min = arr[0];
    continue;
  }
  if (arr[i] < min) min = arr[i];
}

console.log(min);
