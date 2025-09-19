// Task 1
//Create a variable for the body type of car that the user
//wants to buy. Then, display that information to the user.
let kind = "car";
let needsLicenseResult;

console.log("You plan on buying a " + kind + "!")

if (kind == "car" || kind == 'truck'){
    needsLicenseResult = true;
    console.log("You need a license to drive a " + kind);
}
else{
    needsLicenseResult = false;
    console.log("You don't need a license to drive a " + kind);
}

// Task 2

//Create variables that hold the type of car that the
//user is planning on getting. (slight influence from some cool people)
let option1 = '2020 White Nissan Altima';
let option2 = '2010 Gray Mazda 3';

let chooseVehicleResult;

//Display the better choice vehicle.
if (option1>option2){
    chooseVehicleResult = option1 + " is clearly the better choice!";
}
    chooseVehicleResult = option2 + " is clearly the better choice!"; //great choice Seanathon

console.log(chooseVehicleResult);

// Task 3
let originalPrice = 20000; //Original price (MSRP) of the car
let age = 15; //Age of the car
let calculateResellPriceResult;

//Use an if, else if, and else statement to determine the 
//current price of the vehicle.
if (age < 3){
    calculateResellPriceResult = originalPrice * 0.8
}
else if (age > 10){
    calculateResellPriceResult = originalPrice * 0.5;
}
else{
    calculateResellPriceResult = originalPrice * .7;
}

//Display this price to the user.
console.log("Sean's super cool race car would be $" + calculateResellPriceResult); //(ChatGPT estimated them at under $7,000)
