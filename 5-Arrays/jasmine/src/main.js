//Task 1
let stack = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log("Start Stack: " + stack);

let position = 9;
let getItemResult = stack[position];
console.log("Card: " + getItemResult);

//Task 2
position = 6;
let replacementCard = 17;

// Replaces the card at the index 'position' with the 
// replacementCard variable.
let stackBeforeReplacement = stack[position];
stack[position] = replacementCard;
console.log("Stack After Replacement: " + stack)
console.log("(Card #" + stackBeforeReplacement + " Was Replaced with Card #" + replacementCard + ")");

// Task 3
let newCardTop = 25;
stack.unshift(newCardTop);
console.log("Stack With New Top: " + stack);
console.log("(New Top Card #" + stack[0] + ")")

// Task 4
position = 8
let removedCard = stack[position]
stack.splice(position, 1);
console.log("Stack After Remove: " + stack);
console.log("(Card #" + removedCard + " Was Removed)")

// Task 5
let deleteTopCard = stack[0];
stack.shift();
console.log("Stack After Top Delete: " + stack);
console.log("(Card #" + deleteTopCard + " Was Deleted.)");

// Task 6
let newCardBottom = 18;
stack.push(newCardBottom);
console.log("Stack After New Bottom Card: " + stack);
console.log("(Added Card #" + newCardBottom + " To The Bottom Of The Stack.)");

// Task 7
let removeBottomCard = stack[stack.length - 1];
stack.pop();
console.log("New Stack: " + stack);
console.log("(Deleted Card #" + removeBottomCard + " From The Bottom Of The Stack.)")

// Task 8
let stackSize = 9;
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