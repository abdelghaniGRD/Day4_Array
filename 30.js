let arr = [1, 2, 2, 3, 2, 4];

function contains(T, value) {
  let isExists = false;

  for (let val of T) {
    if (val == value) {
      isExists = true;
      return true;
    }
  }
  return false;
}
if (contains(arr, 2)) {
  console.log("value found");
} else console.log("value not found");
