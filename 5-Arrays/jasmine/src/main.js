//Task 1
let stack = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log("Start Stack: " + stack);

let position = 3; //index of the card you want to retrieve.
let getItemResult = stack[position] + 1;
console.log("Card: " + getItemResult);

//Task 2
let replacementCard = 6;

// Replaces the card at the index 'position' with the 
// replacementCard variable.
let stackBeforeReplacement = stack[position];
stack[position] = replacementCard;
console.log("Stack After Replacement: " + stack)
console.log("(Card #" + stackBeforeReplacement + " Was Replaced with Card #" + replacementCard + ")");

// Task 3
let newCardTop = 5;
stack[0] = newCardTop;
console.log("Stack With New Top: " + stack);
console.log("(Top Card Replaced With Card #" + stack[0] + ")")

// Task 4
let cardToRemove = stack[position];
stack.splice(cardToRemove, 1);
console.log("Stack After Remove: " + stack);
console.log("(Card #" + stack[position] + " Was Removed)")

// Task 5
let deleteTopCard = stack[0];
stack.splice(0, 1);
console.log("Stack After Top Delete: " + stack);
console.log("(Card #" + deleteTopCard + " Was Deleted.)");

// Task 6
let newCardBottom = 8;
stack.push(newCardBottom);
console.log("Stack After New Bottom Card: " + stack);
console.log("(Added Card #" + newCardBottom + " To The Bottom Of The Stack.)");

// Task 7
let removeBottomCard = stack.length - 1;
stack.splice(removeBottomCard,1);
console.log("New Stack: " + stack);
console.log("(Deleted Card #" + removeBottomCard + " From The Bottom Of The Stack.)")

// Task 8
let stackSize = 5;
let checkSizeOfStackResult;
console.log("Stack length is: " + stack.length);

if (stack.length==stackSize){
    checkSizeOfStackResult = true;
    console.log("Both the stack array and the 'stackSize' variable are " + stack.length + " Cards Long!");
}
else{
    checkSizeOfStackResult = false;
    console.log("Stack array is " + stack.length + " Cards Long. Stack variable says " + stackSize + ".");
}