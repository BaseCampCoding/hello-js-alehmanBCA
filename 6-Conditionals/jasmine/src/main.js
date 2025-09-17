// Task 1
let kind = "car";
let needsLicenseResult = false;

// Task 2
let option1 = '2020 White Nissan Altima';
let option2 = '2010 Gray Mazda 3';

let chooseVehicleResult = '2010 Mazda 3 is clearly the better choice.'; //great choice Seanathon

// Task 3
let originalPrice = 20000;
let age = 15;
let calculateResellPriceResult;

if (age < 3){
    calculateResellPriceResult = originalPrice * .8
}
else if (age > 10){
    calculateResellPriceResult = originalPrice * .5;
}
else{
    calculateResellPriceResult = originalPrice * .7;
}

console.log(" Sean's super cool race car would be $" + calculateResellPriceResult); //(ChatGPT estimated them at under $7,000)

