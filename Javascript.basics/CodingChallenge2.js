// Coding challenge 2

/*

john and mike both play basketball in different teams. in the latest 3 games
john's team score 89, 120, and 103 points. while mike's team scored 116, 94, and 123 Points 


tasks:

1. calculate the average score for each team


2. decide which teams wins in average(Highest average score), and print the winner
to the console. also include the average scores in the output


3. then change the scores to show different winners. don't forget to take into account
there might be a draw(the same average score)

4. Extra:  Marry also play the basketball and her team scores 97 + 134 + 185 now calculate 
her average team score also 

*/

var johnsTeamScore = (89 + 120 + 103) / 3;
var mikesTeamScore = (116 + 94 + 123) / 3;
var marysTeamScore = (97 + 134 + 185) / 3;

console.log(johnsTeamScore);
console.log(mikesTeamScore);
console.log(marysTeamScore);

//  conditions using If else

if (johnsTeamScore > mikesTeamScore && johnsTeamScore > marysTeamScore) {
  console.log(
    "John's Team score the Highest score with the average of " + johnsTeamScore
  );
} else if (mikesTeamScore > johnsTeamScore && mikesTeamScore > marysTeamScore) {
  console.log(
    "Mike's Team score the highest score with the average of " + mikesTeamScore
  );
} else if (marysTeamScore > johnsTeamScore && marysTeamScore > mikesTeamScore) {
  console.log(
    "Marry's team score the highest score with the average of " + marysTeamScore
  );
} else {
  console.log("They have the draw ");
}
