// Task 1
let digits1 = [1, 7, 3];
let digits2 = [2, 4, 8];

let number1 = Number(digits1.join(""));
console.log("Number 1: " + number1)

let number2 = Number(digits2.join(""));
console.log("Number 2: " + number2)

let twoSum = number1 + number2;
console.log("Sum of the first two number: " + twoSum);

// Task 2
let luckyInput = 12321;
let luckyInputStr = String(luckyInput);
console.log("Lucky Input Number: " + luckyInputStr);

let luckyNumber;

if (luckyInputStr.split("").reverse().join('') == luckyInputStr) {
    luckyNumber = true;
}

else {
    luckyNumber = false;
}

console.log("Reversed Number: " + luckyInputStr);
console.log("Is A Palindrome: " + luckyNumber);

// Task 3
let userInput = '';
let errorMessage;

if (userInput == 'undefined' || userInput == null || userInput == '') {
    errorMessage = 'required field';
}

else if (Number(userInput) == 0 ||  isNaN(Number(userInput))) {
 errorMessage = "Must be a number besides 0";
}

else {
    errorMessgae = '';
}

console.log(errorMessage);