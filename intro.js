// Creating two objects person1 and person2
const person1 = {
    name: "Alice",
    age: 30
};

const person2 = {
    name: "Bob",
    age: 25
};

// Function to introduce a person
function introduce() {
    console.log(`Hello, I'm ${this.name}, and I'm ${this.age} years old.`);
}

// Calling the introduce function for person2 using the call method
introduce.call(person2); // Output: Hello, I'm Bob, and I'm 25 years old.
