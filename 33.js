let arr = [4, 9, 2, 10, 7];

function Max(T) {
  let max = T[0];
  for (let i = 0; i < T.length; i++) {
    if (T[i] > max) max = T[i];
  }
  return max;
}

function SecondLargestVal(T) {
  let max = Max(T);
  let beforeMax = T[0];

  for (let i = 0; i < T.length; i++) {
    if (T[i] > beforeMax && T[i] !== max) {
      beforeMax = T[i];
    }
  }

  return beforeMax;
}
console.log(SecondLargestVal(arr));
