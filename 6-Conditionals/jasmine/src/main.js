// Task 1
//Create a variable for the body type of car that the user
//wants to buy. Then, display that information to the user.
let kind = "car";
console.log("You plan on buying a " + kind + "!")

//Create a variable that tells whether or not the user
//has a drivers license yet.
let needsLicenseResult = false;

//If the user doesn't have a license, shame them.
if (needsLicenseResult==true){
    console.log("How do you not have a license..? That's kind of embarrasing.")
}

//Otherwise, tell the user that they are ready to go!
else{
    console.log("Looks like you are ready to go! Now all thats left is to find a nice ride!")
}

// Task 2

//Create variables that hold the type of car that the
//user is planning on getting. (slight influence from some cool people)
let option1 = '2020 White Nissan Altima';
let option2 = '2010 Gray Mazda 3';

//Display the better choice vehicle.
let chooseVehicleResult = '2010 Mazda 3 is clearly the better choice.'; //great choice Seanathon

// Task 3
let originalPrice = 20000; //Original price (MSRP) of the car
let age = 15; //Age of the car
let calculateResellPriceResult;

//Use an if, else if, and else statement to determine the 
//current price of the vehicle.
if (age < 3){
    calculateResellPriceResult = originalPrice * .8
}
else if (age > 10){
    calculateResellPriceResult = originalPrice * .5;
}
else{
    calculateResellPriceResult = originalPrice * .7;
}

//Display this price to the user.
console.log(" Sean's super cool race car would be $" + calculateResellPriceResult); //(ChatGPT estimated them at under $7,000)