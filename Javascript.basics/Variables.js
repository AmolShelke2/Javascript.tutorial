/* what is a variable. variable is like a container in which we 
can store values and instead of write it over and over again in our code 
we can use a variable 

*/

/* Variable rules 

You can't use the reserved keywords to create a variable 
for example number  delter function if else etc;

You have to create Your own variable names that not be used in javascript language
*/
// Declaring a variable

// var firstName = "John";
// console.log(firstName);

// var lastName = "Smith";

// var age = 28;

// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------->

/* variable mutation and type coersion

Type coercion refers to the process of automatic or
 inplicit conversion of values from one data type to
  another. this includes conversion from number to string 
  string to number Boolean to number etc. When different types of operations 
  are applied to the values
 */

var firstName = "John";
var age = 29;

console.log(firstName + " " + age);

var job, isMarried;

job = "Teacher";
isMarried = false;

console.log(
  firstName +
    " is a " +
    age +
    " year old " +
    job +
    ". Is he married? " +
    isMarried
);

// Variable mutation

age = "Twenty Eight";
console.log(age);
job = "Front end dev";

alert(
  firstName +
    " is a " +
    age +
    " year old " +
    job +
    ". Is he married? " +
    isMarried
);

var lastName = prompt("wnat is his last name");
console.log(firstName + " " + lastName);

//------------------------------------------------------------------------------------------------------------------------------------->
