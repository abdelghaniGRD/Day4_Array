let numbers = [10, 20, 30, 40];
let newArr = [];

console.log("array before skipping the number 30", numbers);
for (let i in numbers) {
  if (numbers[i] !== 30) {
    {
      // newArr.push(numbers[i]);
      let temp = numbers;
      numbers = [];

      for (let j in temp) {
        if (temp[j] !== 30) numbers.push(temp[j]);
      }
    }
  }
}

console.log(numbers);
