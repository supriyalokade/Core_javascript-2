// Array of student ages
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];

// Sort the array
ages.sort((a, b) => a - b);

// Find the minimum and maximum age
const minAge = ages[0];
const maxAge = ages[ages.length - 1];

// Find the median age
let medianAge;
const middle = Math.floor(ages.length / 2);

if (ages.length % 2 === 0) {
    // If even number of elements, median is the average of the two middle elements
    medianAge = (ages[middle - 1] + ages[middle]) / 2;
} else {
    // If odd number of elements, median is the middle element
    medianAge = ages[middle];
}

// Find the average age
const totalAge = ages.reduce((sum, age) => sum + age, 0);
const averageAge = totalAge / ages.length;

// Find the range of ages
const range = maxAge - minAge;

// Compare the value of (min - average) and (max - average) using abs()
const minDiff = Math.abs(minAge - averageAge);
const maxDiff = Math.abs(maxAge - averageAge);

// Display the results
console.log("Sorted Ages:", ages);
console.log("Minimum Age:", minAge);
console.log("Maximum Age:", maxAge);
console.log("Median Age:", medianAge);
console.log("Average Age:", averageAge);
console.log("Range:", range);
console.log("Difference (min - average):", minDiff);
console.log("Difference (max - average):", maxDiff);
