const players = ['Jane', 'Tom', 'Jack', 'Carrie'];

//copy the players

const team = players;
console.log(team);


//updates both original and copy
team[3] = 'Rosie';
console.log(team, players);

//slice allows you have to an changable copy
const team2 = players.slice();
team2[3] = 'Carrie';
console.log(team2);

//you can also concatinate (works the same as slice)
const team3 = [].concat(team2);
console.log(team3);


//copy with spread
const team4 = [...players];
team4[4] = 'Rosie';
console.log(team4);

//copy with Array.from()
const team5 = Array.from(team4);
console.log(players);