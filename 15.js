let arr = [10, 20, 30];
let sum = 0;

for (let i in arr) {
  sum = sum += arr[i];
}

let avr = sum / arr.length;

console.log("the sum is:", sum);
console.log("the average is:", avr);
