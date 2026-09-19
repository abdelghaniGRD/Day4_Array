let arr = [1, 2, 3, 4, 5, 6];

let evenValuesCount = 0;
for (let i in arr) {
  if (arr[i] % 2 === 0) evenValuesCount += 1;
}

console.log(evenValuesCount);
