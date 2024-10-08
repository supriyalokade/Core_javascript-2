// Step 1: Create a Set to store unique numbers
const uniqueNumbers = new Set([1, 2, 3, 4, 5, 5, 6, 7, 8, 9, 9]);

// Step 2: Create a Map to store each number and its square
const numberSquares = new Map();

// Populate the Map with the numbers and their squares
uniqueNumbers.forEach(num => {
    numberSquares.set(num, num * num);
});

// Step 3: Print the unique numbers and their corresponding squares
console.log("Unique Numbers:");
uniqueNumbers.forEach(num => console.log(num));

console.log("\nCorresponding Squares:");
numberSquares.forEach((square, num) => {
    console.log(`${num}: ${square}`);
});
