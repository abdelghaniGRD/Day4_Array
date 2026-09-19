let numbers = [1, 2, 4, 5];
console.log("array before adding 3", numbers);
let newBuildedArray = [];

for (let i in numbers) {
  newBuildedArray.push(numbers[i]);

  if (i == 1) {
    newBuildedArray.push(3);
  }
}

console.log("array after ading 3", newBuildedArray);
