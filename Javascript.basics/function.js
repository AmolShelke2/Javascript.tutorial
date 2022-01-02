// function in javascript

// function calculateAge(birthYear) {
//   return 2021 - birthYear;
// }

// var ageAmol = calculateAge(2004);
// var ageJohn = calculateAge(1989);
// var ageMike = calculateAge(1969);
// var ageMarry = calculateAge(2000);

// console.log(ageJohn, ageMike, ageMarry, ageAmol);

// function yearsUntilRetirement(year, firstName) {
//   var age = calculateAge(year);
//   var retirement = 65 - age;

//   if (retirement > 0) {
//     console.log(firstName + " retires in " + retirement + " years. ");
//   } else {
//     console.log(firstName + " is already retired");
//   }
// }

// yearsUntilRetirement(1990, "john");
// yearsUntilRetirement(1948, "Mike");
// yearsUntilRetirement(1969, "jane");
// ------------------------------------------------------------------------------------>

// function statements and Expression

// function declaration
function whatDoYouDo(job, firstName) {}

//function Expression
var whatDoYouDo = function (job, firstName) {
  switch (job) {
    case "teacher":
      return firstName + " teaches kids how to code";

    case "driver":
      return firstName + " drive uber in India";

    case "coder":
      return firstName + " work in google as a front end devloper";

    default:
      return firstName + " does something else";
  }
};

console.log(whatDoYouDo("teacher", "john"));
console.log(whatDoYouDo("coder", "jain"));
console.log(whatDoYouDo("retire", "john"));
