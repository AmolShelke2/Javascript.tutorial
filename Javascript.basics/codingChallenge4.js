var john = {
  fullName: "john smith",
  mass: 58,
  height: 1.87,
  bmiCalc: function () {
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;
  },
};

var mark = {
  fullName: "Mark miller",
  mass: 78,
  height: 1.83,
  bmiCalc: function (Bmi) {
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;
  },
};

john.bmiCalc();
mark.bmiCalc();
console.log(john, mark);

if (john.bmi > mark.bmi) {
  console.log(john.fullName + " has a higher BMI of " + john.bmi);
} else if (mark.bmi > john.bmi) {
  console.log(mark.fullName + " has a higher BMI of " + mark.bmi);
} else {
  console.log("They have the same Bmi");
}
