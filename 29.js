let arr = [1, 2, 2, 3, 2, 4];

function CountOccurences(T, val) {
  let count = 0;
  for (let i = 0; i < T.length; i++) {
    if (T[i] === val) count++;
  }

  return count;
}

let val = CountOccurences(arr, 3);

console.log(val);
