// Task 1
let birdsPerDay = [2, 4, 3, 1, 5, 2, 8];
let total = 0;

for (let i = 0; i < birdsPerDay.length; i++){
    total += birdsPerDay[i];
}

console.log("You saw a total of " + total + " birds this week!")

// Task 2
let week = 1;
let daysPerWeek = 7;
let weekStart = (week - 1) * daysPerWeek;
let weekEnd = week * daysPerWeek;
let weekTotal = 0;

//Figure out the for loop explained on line 28 on the readme.

// Task 3
for (let i = 0; i < birdsPerDay.length - 1; i++){
    i += 1;
    birdsPerDay[i] += 1;
}
console.log(birdsPerDay);