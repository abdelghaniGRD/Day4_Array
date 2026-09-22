let arr = [-3, -10, 5, -1, 8, 17, 0];

function Range(T) {
  let max, min;

  max = T[0];
  min = T[0];

  for (let i in T) {
    if (T[i] > max) max = T[i];

    if (T[i] < min) min = T[i];
  }
  return max - min;
}

//
console.log("so the range is", Range(arr));
