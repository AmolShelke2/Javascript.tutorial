// operator presedence

var now = 2021;
var yearJohn = 1989;
var fullAge = 18;

// multiple operators

var fullAge = now - yearJohn >= fullAge; // true
console.log(fullAge);

// ---------------------------------------------------------------------->

// grouping operator
var ageJohn = now - yearJohn;
var ageMark = 35;

var average = (ageJohn + ageMark) / 2;
console.log(average);

// -------------------------------------------------------------------------->

// Multiple assignment

var x, y;
x = y = (3 + 2) * 4 - 6; // 13 * 4 - 6// 20 -6 // 14
console.log(x);

console.log(x, y);

//------------------------------------------------------------------------->
// More operator

x = x * 2;
x *= 2;
x++;
x += 1;
