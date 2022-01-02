// Hosting

// function declaration

calculateAge(1989);

function calculateAge(year) {
  console.log(2016 - year);
}

// function expression
// retirement(1996);

var retirement = function (year) {
  console.log(65 - (2021 - year));
};

// variables

console.log(age);

var age = 23;
console.log(age);

function foo() {
  console.log(age);
  var age = 87;
  console.log(age);
}

foo();
console.log(age);
