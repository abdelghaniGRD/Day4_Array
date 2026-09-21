let arr = [4, 9, 2, 1, 7];
let sorted = [];

let minIndex;
let min;

for (let i = 0; i <= arr.length - 1; i++) {
  for (let j = 1; j <= arr.length - 1; j++) {
    if (arr[i] > arr[j]) {
      let temp = arr;

      arr = [];

      for (let b in temp) {
        if (b == i) {
          arr.push(arr[i + 1]);
          continue;
        }
        arr.push(temp[b]);
      }
    }
  }
}
console.log(arr);

// sorted.push(min);
// let temp = arr;

// arr = [];

// for (let b in temp) {
//   if (b == minIndex) continue;
//   arr.push(temp[b]);
// }
// console.log(min);

// for (let a in arr) {
//   if (a === minIndex) continue;

//   newarr.push(arr[a]);
// }

// console.log(min);
// }
