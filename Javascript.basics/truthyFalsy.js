// Truthy falsy values and equality operators

// falsy values : undefined null 0 '' NaN
// truthy values: not falsy values

var height;

height = 23;

if (height || height === 0) {
  console.log("variable is defined");
} else {
  console.log("variable has Not been defined");
}

// Equality operators

if (height == "23") {
  console.log("the == operator does type coercion!");
}

//this will return true because of == this equalty operator
var Num = 23 == "23";
console.log(Num);

// this will return false because of this === equality operator

var Num = 23 === "23";
console.log(Num);
