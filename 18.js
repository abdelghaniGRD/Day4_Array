let arr = [-3, 5, -1, 8, 0];
let total = 0;
for (let val of arr) {
  if (val > 0) total = total += val;
}

console.log(total);
