let arr = [4, 9, 2, 9, 1];
let sum = 0;
for (let i in arr) {
  if (i % 2 === 0) sum += arr[i];
}

console.log(sum);
