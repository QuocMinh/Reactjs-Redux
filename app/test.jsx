// Toan tu 3 cham (...)

let obj1 = {
  name: "Quoc Minh",
  age: 18
}

let obj2 = {...obj1, height: 174, age: 30};
obj1.age = 30;

console.log(obj2);

let arr1 = [3, 6, 9, 12];
let arr2 = [7, 8, ...arr1, 10];
arr1[0] = 1000;

console.log('Array 1: ' + arr1);
console.log('Array 2: ' + arr2);

// Pure function

let add = (a, b) => a + b;
console.log(add(5,6));