let arr = [1, 2, 2, 3, 2, 4];
let isExists = false;
let value = 10;
for (let val of arr) {
  if (val == value) {
    isExists = true;
    break;
  }
}

if (isExists) {
  console.log("value found");
} else console.log("value not found");
