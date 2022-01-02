// Coding Challenge 3

/* 

john and his family went on a holiday and went to 3 different 
restraunts the bills were 124, 48, and 368 

to tip the waiter a fair amount john created a simple calculator 
(as a function ). he likes to tip 20 % of The bill when the bill is 
less than 50 and 15% when the bill is between 50 and 200 and 10% if the 
bill is more than 200

In the end, john would like to have 2 arrays:

containing all three tips (one for each bill):

containing all three final paind ammounts (bill + tip)

Note (to calculate 20% of a value simply multiply it with 20/ 100 = .2)
*/

function tipCalculator(bills) {
  var percentage;

  if (bills < 50) {
    percentage = 0.2; // this will be 20%
  } else if (bills >= 50 && bills < 200) {
    percentage = 0.15;
  } else {
    percentage = 0.1;
  }

  return percentage * bills;
}

var bills = [128, 48, 268];

var tips = [
  tipCalculator(bills[0]),
  tipCalculator(bills[1]),
  tipCalculator(bills[2]),
];

var finalValues = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

console.log(tips, finalValues);
