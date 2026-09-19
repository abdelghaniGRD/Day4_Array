let matches = [];
let arr = [3, 7, 3, 9, 3];
let target = 3;

for (let i in arr) {
  if (arr[i] == target) {
    matches.push(i);
  }
}

console.log(matches);
