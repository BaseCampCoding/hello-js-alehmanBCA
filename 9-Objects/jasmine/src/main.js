// Task 1
const scoreBoard = {'The Best Ever':1000000, "Kobe": 7000};

// Task 2
let newPlayerName = "LeBron";
let newPlayerScore = 5000;

scoreBoard[newPlayerName] = newPlayerScore;
console.log("After adding " + newPlayerName);
console.log(scoreBoard);

// Task 3
let playerToRemove = 'The Best Ever';

//Deletes the key and value where the key equals the playerToRemove variable.
delete scoreBoard[playerToRemove];
console.log("After Delete")
console.log(scoreBoard);

// Task 4
console.log(typeof(scoreBoard["LeBron"]))
let playerNameToUpdate = 'LeBron';
let scoreToAdd = 1000;
scoreBoard[playerNameToUpdate] += 1000;

console.log("After score update");
console.log(scoreBoard);

// Task 5'
let mondayBonus = 100;

for(let player in scoreBoard){
    scoreBoard[player] += mondayBonus;
}

console.log("After Monday Bonus")
console.log(scoreBoard)