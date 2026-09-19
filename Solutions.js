// 1. Create and print an array — Easy

let menu = ["pizza", "sushi", "tacos"];

console.log(menu);

//2. Access by index — Easy
let numbers = [10, 20, 30];

console.log(numbers[1]);

//3. Push a new item — Easy

let pushing = [1, 2];

pushing.push(3);

//4. Pop the last item — Easy

let pop = [5, 6, 7];

let popedItem = pop.pop();

console.log("Poped item is :", popedItem);
console.log("The remaining items :", pop);

//5. Change an item by index — Medium

let colors = ["red", "green", "blue"];

console.log("arr before changing green", colors);

for (let i in colors)
  if (colors[i] === "green") {
    colors[i] = "yellow";
  }

console.log("array after changing green to yellow", colors);

//6. Access the last item generically — Medium

let lastElementArray = ["one", "two", "three", "four"];
console.log(
  "last item of the colors array is:",
  lastElementArray[lastElementArray.length - 1]
);

//7. const array mutation — Medium

const arr = [1, 2];

arr.push(3);

console.log(arr);

// arr = [4, 5];
//console.log(arr);
// we cant reassign a const variable, but we can change to its array content

// Thats why changing in the arr using const arr = [1, 2]; arr.push(3) works,
//and reassignment deosnt work arr = [4, 5] and it throw error
