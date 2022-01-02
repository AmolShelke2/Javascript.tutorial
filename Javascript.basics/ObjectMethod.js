// Object and methods

var amol = {
  firstName: "Amol",
  lastName: "shelke",
  birthYear: 2004,
  family: ["ganesh", "mom", "dad"],
  job: "student",
  isMarried: false,

  calcAge: function () {
    this.age = 2021 - this.birthYear;
  },
};

amol.calcAge();
console.log(amol);
