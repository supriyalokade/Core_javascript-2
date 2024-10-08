// Function to display information about a person (name and role)
function displayInfo(name, role) {
    console.log(`Name: ${name}, Role: ${role}`);
}

// Using call to invoke displayInfo with specific arguments
console.log("Using call:");
displayInfo.call(null, "Alice", "Developer");

// Using apply to invoke displayInfo with arguments passed as an array
console.log("\nUsing apply:");
displayInfo.apply(null, ["Bob", "Designer"]);

// Function to greet with a specific context (this)
function greet() {
    console.log(`Hello, I'm ${this.name}, and I work as a ${this.role}`);
}

// Using bind to create a new function with a specific context
const person = {
    name: "Charlie",
    role: "Manager"
};

const boundGreet = greet.bind(person);

// Log the greeting using the boundGreet function
console.log("\nUsing bind:");
boundGreet();
