let arr = [1, 2, 3];

/*SOLUTION ONE */

// let newArr = [];
// for (let i = arr.length - 1; i >= 0; i--) {
//   newArr.push(arr[i]);
// }
// console.log(newArr);

/*SOLUTION TWO */

let i = 0,
  j = arr.length - 1;

while (i !== j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;

  i++;
  j--;
}

console.log(arr);
