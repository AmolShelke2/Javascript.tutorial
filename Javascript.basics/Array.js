// array in javascrfipt

// Initalize new array

var names = ["John", "mike", "mark"];
var years = new Array(1989, 1969, 1948);

console.log(names);
console.log(names[0]);
// ----------------------------------------------------------------->
// Muted array data

names[1] = "Amol";
names[names.length] = "Marry";
console.log(names);
// ---------------------------------------------------------------->

// Different data types

var john = ["John", "smith", 1990, "teacher", false, "designer"];
john.push("Blue");
john.unshift("Mr.");
console.log(john);

john.indexOf(1990);
console.log(john.indexOf(1990));

// ------------------------------------------------------------------------->
var isDesigner =
  john.indexOf("designer") === -1
    ? "john is Not a designer"
    : "john Is a designer";
console.log(isDesigner);

// ------------------------------------------------------------------------------>
