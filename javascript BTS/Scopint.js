// first scoping example

var a = "hello";
first();

function first() {
  var b = "Hi!";
  second();

  function second() {
    var c = "hey!";
    console.log(a + b + c);
  }
}

// Example to show the difference between execution stack and scope chain

// gloabal scope or global execution context.  because of hoisting we can call the function before its written

var a = "Hello!";
first();

function first() {
  var b = "HI";
  second();

  function second() {
    var c = "hey!";
    third();
  }
}
/*
here we define variable d and attempt to console.log variable c it will throw an error
this will happen because of the third function call by the second function and the
 second function has access to the third functionn because of the scope chain. 
 the third function cannot access the variable c becasue the execution stack is different from 
 the scope chain which as we see resulted in this error.

 who can access 
*/
function third() {
  var d = "john";
  console.log(c);
  console.log(a + d);
}
