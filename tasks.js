// Calculator object with add, subtract, and multiply methods
const calculator = {
    add: function(a, b) {
        return a + b;
    },
    subtract: function(a, b) {
        return a - b;
    },
    multiply: function(a, b) {
        return a * b;
    },
    // Method to perform a calculation based on the operation
    calculate: function(operation, a, b) {
        return this[operation](a, b);
    }
};

// Use call to perform an addition operation using the calculate method
console.log("Using call to add:");
console.log(calculator.calculate.call(calculator, 'add', 5, 10)); // 15

// Use apply to perform a multiplication operation using the calculate method with arguments as an array
console.log("\nUsing apply to multiply:");
console.log(calculator.calculate.apply(calculator, ['multiply', 6, 7])); // 42

// Create another object named discountCalculator with a discount percentage property and applyDiscount method
const discountCalculator = {
    discountPercentage: 10,
    applyDiscount: function(price) {
        const discountAmount = (this.discountPercentage / 100) * price;
        return price - discountAmount;
    }
};

// Use bind to create a new function calculateDiscount bound to the discountCalculator object
const calculateDiscount = discountCalculator.applyDiscount.bind(discountCalculator);

// Log the discounted price using the bound function
console.log("\nUsing bind to calculate discount:");
console.log(calculateDiscount(200)); // 180 (200 - 10% of 200)
