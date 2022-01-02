// Object and properties

// object literal
var john = {
  name: "john",
  lastName: "smith",
  birthYear: 1989,
  family: ["jane", "mark", "bob", "emily"],
  isMarried: false,
  job: "teacher",
};

// acessing items from object
console.log(john.name);
// ------------------------------------------------>
var x = "birthYear";

console.log(john[x]);

console.log(john["lastName"]);

// Muted object
john.job = "Driver";
console.log(john);
// ------------------------------------------------------->

// New object syntax
var jane = new Object();
jane.firstName = "jane";
jane.birthYear = 1969;
jane["lastName"] = "smith";
console.log(jane);
