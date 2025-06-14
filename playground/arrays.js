const arr = [1, 2, 3, 4, 5];

const newArr = new Array("Dhaka", "Chittagong", "Sylhet", "Rajshahi", "Khulna");

console.log('New array:', newArr);

console.log('Original array:', arr);

arr.push(6);
console.log('Array after push -> ', arr);
arr.pop();  
console.log('Array after pop -> ', arr);
arr.unshift(0);
console.log('Array after unshift -> ', arr);
arr.shift();
console.log('Array after shift -> ', arr);

arr.splice(2, 1, 10, 20);
console.log('Array after splice -> ', arr);


console.log('Array now -> ', arr);