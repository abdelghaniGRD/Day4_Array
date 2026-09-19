let beforeRotate = [1, 2, 3, 4, 5];
console.log("Before rotate ", beforeRotate);
let afterRotate = [];

let temp;

let size = beforeRotate.length;

for (let i = 0; i <= size - 1; i++) {
  if (i == 0) {
    temp = beforeRotate[i];
    continue;
  }

  afterRotate.push(beforeRotate[i]);
}

afterRotate.push(temp);

console.log("after rotate", afterRotate);
