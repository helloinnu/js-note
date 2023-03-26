const profile = {
  firstName: "John",
  lastName: "Doe",
  age: 18,
};

// const { firstName, lastName, age } = profile;

// console.log(firstName, lastName, age);

console.log("============================");

let firstName = "Dimas";
let age = 20;

// menginisialisasi nilai baru melalui destructuring object
({ firstName } = profile);

console.log(firstName);
console.log(age);

// Assigning to Different Local Variable Names
console.log("============================");
const { firstName: localFirstName, lastName: localLastName, age: localAge } = profile;

console.log(localFirstName);
console.log(localLastName);
console.log(localAge);
