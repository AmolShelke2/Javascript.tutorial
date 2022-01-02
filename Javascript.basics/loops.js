// Loops and iteration

// for (var i = 0; i < 10; i++) {
//   console.log(i);
// }

// i = 0, 0 , 10 true log i to console, i ++
// i = 1, 1 10 tue log i to the console, i ++
// ............

// i = 9, 9 < 10 true, log to the console, i++
// i = 10 10 < 10 FALSE, exit the loop
/*
var john = ["john", "smith", 1990, "designer", false];
for (var i = 0; i < john.length; i++) {
  console.log(john[i]);
}

var amol = ["Amol", "shelke", 2004, "Front end dev", false];
for (var i = 0; i < amol.length; i++) {
  console.log(amol[i]);
}

using The while loop
var john = ["john", "smith", 1990, "designer", false];
var i = 0;
while (i < john.length) {
  console.log(john[i]);
  i++;
}
*/

// Continue and break statements
// var amol = ["Amol", "shelke", 2004, "Front end dev", false];
// for (var i = 0; i < amol.length; i++) {
//   if (typeof amol[i] !== "string") continue;
//   console.log(amol[i]);
// }

// for (var i = 0; i < amol.length; i++) {
//   if (typeof amol[i] !== "string") break;
//   console.log(amol[i]);
// }

// Challenge Reverse the order of the Given array

var john = ["john", "designer", 1989, false];

for (var i = john.length; i--; ) {
  console.log(john[i]);
}
