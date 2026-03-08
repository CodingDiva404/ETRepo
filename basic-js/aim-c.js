// Creating an object
let student = {
  name: "Shraddha",
  age: 25,
  course: "MSC IT"
};

// Accessing properties using DOT notation
console.log(student.name);
console.log(student.age);

// Accessing properties using BRACKET notation
console.log(student["name"]);
console.log(student["course"]);

// Accessing using variable with bracket notation
let property = "age";
console.log(student[property]);

// Adding a new property
student.city = "Mumbai";           // dot notation
student["college"] = "RJ College"; // bracket notation

console.log(student.city);
console.log(student["college"]);