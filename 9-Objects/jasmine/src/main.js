// Task 1
const scoreBoard = {'The Best Ever':1000000};

// Task 2
let newPlayerName = 'Joe';
let newPlayerScore = 6;

scoreBoard[newPlayerName] = newPlayerScore;
console.log(scoreBoard);

// Task 3
let playerToRemove = 'Joe';

//Deletes the key and value where the key equals the playerToRemove variable.
delete scoreBoard[playerToRemove];
console.log(scoreBoard);

// Task 4
scoreBoard.John = 15;
console.log(scoreBoard)
let playerNameToUpdate = 'John';

scoreToAdd = 2;
scoreBoard.John += scoreToAdd;
console.log(scoreBoard)

// Task 5'
let mondayBonus = 100;

for (let name in scoreBoard){
    scoreBoard[name] += mondayBonus;
    console.log(scoreBoard);
}