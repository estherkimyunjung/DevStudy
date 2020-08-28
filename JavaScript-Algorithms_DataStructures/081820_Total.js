// const laLigaGoals = 43, championsLeagueGoals = 10, copaDelReyGoals = 5;
// const totalGoals = sum(laLigaGoals, championsLeagueGoals, copaDelReyGoals)

// function sum (a , b , c ){
//   return parseInt(a) + parseInt(b) + parseInt(c)
// }


// const laLigaGoals = 43, championsLeagueGoals = 10, copaDelReyGoals = 5;
// const totalGoals = [laLigaGoals, championsLeagueGoals, copaDelReyGoals].reduce((a,b) => a + b)


/*
  In a real situation, you can do without variables,
  but tests are not performed if there are no variables.
  My code is aimed at potential expansion. Suddenly, someone wants to
  enter more data on the goals of Messi? In this case, you can simply
  add the object to my array. 
  ===========================
  Thanks for reading this, friend.
  Good mood and coding!
*/

const laLigaGoals = 43;
const championsLeagueGoals = 10;
const copaDelReyGoals = 5;

const goalScoringStatistics = [
  {
    competition: 'La Liga',
    goals: laLigaGoals,
  },
  {
    competition: 'Champions League',
    goals: championsLeagueGoals,
  },
  {
    competition: 'Copa del Rey',
    goals: copaDelReyGoals,
  }
]

const countGoals = (arr) => {
  let sum = 0;
  arr.forEach((item) => {
    sum += item.goals;
  });
  return sum;
}

const totalGoals = countGoals(goalScoringStatistics);