let swapArr = [1, 2, 3, 4];

console.log("before swapping", swapArr);
let temp;

for (let i in swapArr) {
  if (i == 0) {
    temp = swapArr[i];
  }

  if (i == swapArr.length - 1) {
    swapArr[0] = swapArr[i];

    swapArr[swapArr.length - 1] = temp;
  }
}

console.log("after swapping", swapArr);
