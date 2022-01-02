// the ternary and switch statement

// ternary operator

var firstName = "john";
var age = 16;

age >= 18
  ? console.log(firstName + " drink beer.")
  : console.log(firstName + " drinks juice");

var drink = age >= 18 ? "beer" : "juice";
console.log(drink);

// switch statement
var job = "coder";

switch (job) {
  case "teacher":
  case "instructor":
    console.log(firstName + " teaches kids how to code");
  case "driver":
    console.log(firstName + " drives an uber in india ");
  case "coder":
    console.log(firstName + " work in Google as a front end engineer");
}

age = 10;
switch (true) {
  case age < 13:
    console.log("John is a boy.");
    break;

  case age >= 13 && age < 20:
    console.log(firstName + " is a teenager");
    break;

  case age >= 20 && age < 38:
    console.log(firstName + " is a young man");

  default:
    console.log(firstName + " is a old person");
}
