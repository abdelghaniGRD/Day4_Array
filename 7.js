const arr = [1, 2];

arr.push(3);

console.log(arr);
// arr = [4, 5];
//console.log(arr);
// we cant reassign a const variable, but we can change to its array content

// Thats why changing in the arr using const arr = [1, 2]; arr.push(3) works,
//and reassignment deosnt work arr = [4, 5] and it throw error;
