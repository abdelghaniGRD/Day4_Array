let arr = [1, 2, 2, 3, 1, 4];
let newarr = [];

for (let i in arr) {
  if (i == 0) {
    newarr.push(arr[i]);

    continue;
  }

  for (let val of newarr) {
    if (arr[i] != val) newarr.push(arr[i]);
  }
}

console.log(newarr);
