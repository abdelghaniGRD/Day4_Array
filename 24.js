let arr = [4, 10, 2, 9, 1];

function stats(T) {
  let sum = 0;
  let max = 0;
  let min;

  for (let i in T) {
    if (i == 0) min = T[i];

    sum += T[i];

    if (T[i] < min) min = T[i];

    if (T[i] > max) max = T[i];
  }

  let avrg = sum / T.length;
  console.log("sum:", sum);
  console.log("average:", avrg);
  console.log("min:", min);
  console.log("max:", max);
}

stats(arr);
