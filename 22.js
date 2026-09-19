let arr = [4, 9, 2, 9, 1];

let maxVal = 0;
let maxIndex = 0;

for (let i in arr) {
  if (arr[i] > maxVal) {
    maxVal = arr[i];
    maxIndex = i;
  }
}

console.log("index of the first max is:", maxIndex);
