const fruits = ['apple', 'banana', 'cherry'];
const berries = ['strawberry', 'blueberry', 'raspberry'];


const allFruits = [fruits, berries];
console.log('All fruits array -> ', allFruits);

const flattenedFruits = allFruits.flat();
console.log('Flattened fruits array -> ', flattenedFruits);

const nestedFruits = allFruits.flat(3);
console.log('Nested fruits array -> ', nestedFruits);



const spreadFruits = [...fruits, ...berries];
console.log('Spread fruits array -> ', spreadFruits);


