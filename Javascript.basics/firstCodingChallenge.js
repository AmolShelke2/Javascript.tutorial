// Coding challenge 1
/*

mark and john are trying to compare their BMI (body mass Index),
which is calculated using the formula BMI = mass / height* 2 = 
mass / (height * height). (mass in kg and height in meter.)


1. store mark's and john's mass and height in variables 
2. calculate both their BMIs 

3. create a boolean variable containing information about 
whether mark has a higher BMI than john.

4. print a string to the console. containing the variable fromt 
step3. something like this ("is mark's bmi higher than john true")

*/

var marksMass = 145; //kg
var markHeight = 5.4; //meter

var johnsMass = 165; //kg
var johnHeight = 4.5; //meter

var marksBMI = marksMass / (markHeight * markHeight);
var johnsBMI = johnsMass / (johnHeight * johnHeight);

console.log(marksBMI, johnsBMI);

var HigherBMI = marksBMI > johnsBMI;

console.log("Is mark's BMI is higher than John's BMI ?" + HigherBMI);
