let numbers = [10, 20, 30, 40];
let newArr = [];

console.log("array before skipping the number 30", numbers);
for (let i in numbers) {
  if (numbers[i] !== 30) {
    newArr.push(numbers[i]);
  }
}

console.log("the new builded array is:", newArr);
