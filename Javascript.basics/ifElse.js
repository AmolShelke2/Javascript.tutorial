// if else

var firstName = "john";
var civiStatus = "single";

if (civiStatus === "married") {
  console.log(firstName + " is married");
} else {
  console.log(firstName + " is single ");
}

// let's add the if else to the challenge

var marksMass = 145; //kg
var markHeight = 5.4; //meter

var johnsMass = 165; //kg
var johnHeight = 4.5; //meter

var marksBMI = marksMass / (markHeight * markHeight);
var johnsBMI = johnsMass / (johnHeight * johnHeight);

// var HigherBMI = marksBMI > johnsBMI;

// console.log("Is mark's BMI is higher than John's BMI ?" + HigherBMI);

if (marksBMI > johnsBMI) {
  console.log("Mark's BMI is higher than John's BMI " + johnsBMI);
} else {
  console.log("John's BMI is higherr than mark's BMI " + johnsBMI);
}
