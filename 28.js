let arr = [1, 2, 2, 3, 2, 4];
let target = 2;
let count = 0;
for (let val of arr) {
  if (val == target) count++;
}
console.log(count);
