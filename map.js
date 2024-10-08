// Create a Map to store contact information
const contacts = new Map();

// Function to add a contact to the Map
function addContact(name, age, email, location) {
    contacts.set(name, { age, email, location });
}

// Function to retrieve contact details by name
function getContactByName(name) {
    if (contacts.has(name)) {
        return contacts.get(name);
    } else {
        return `Contact with name "${name}" not found.`;
    }
}

// Adding some contacts
addContact("John Doe", 30, "john.doe@example.com", "New York");
addContact("Jane Smith", 25, "jane.smith@example.com", "Los Angeles");
addContact("Sam Brown", 28, "sam.brown@example.com", "Chicago");

// Retrieving contact details by name
console.log(getContactByName("John Doe")); // { age: 30, email: 'john.doe@example.com', location: 'New York' }
console.log(getContactByName("Jane Smith")); // { age: 25, email: 'jane.smith@example.com', location: 'Los Angeles' }
console.log(getContactByName("Alice Johnson")); // Contact with name "Alice Johnson" not found.
