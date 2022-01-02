/*
The this keyword

console.log(this);

calculateAge(1990);
function calculateAge(year) {
  console.log(2021 - year);
  console.log(this);
}

*/

var john = {
  name: "john",
  yearOfBirth: 1990,

  calculateAge: function () {
    console.log(this);
    console.log(2021 - this.yearOfBirth);
    /*
    function innerFunction() {
      console.log(this);
    }
    innerFunction();
    */
  },
};

john.calculateAge();

var mike = {
  name: "Mike",
  yearOfBirth: 1984,
};

// method borrowing

mike.calculateAge = john.calculateAge;
mike.calculateAge();
