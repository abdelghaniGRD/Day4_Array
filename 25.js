let arr = [5, 8, 2, 9];

let index = 0;

let isFound = false;

for (let i in arr) {
  if (arr[i] == 2) {
    index = i;
    isFound = true;
    break;
  }
}
console.log("is index found:", isFound);
console.log("it's index is:", index);
