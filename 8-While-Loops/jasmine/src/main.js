// Task 1
let juiceName = 'Energizer';
let timeToMixJuiceResult;

if (juiceName == "Pure Strawberry Joy"){
    timeToMixJuiceResult = 0.5;
}
else if (juiceName == "Energizer" || juiceName == "Green Garden") {
    timeToMixJuiceResult = 1.5;
}
else if (juiceName == "Tropical Island"){
    timeToMixJuiceResult = 3;
}
else if (juiceName == "All or Nothing"){
    timeToMixJuiceResult = 5;
}
else{
    timeToMixJuiceResult = 2.5;
}

console.log("Your juice takes " + timeToMixJuiceResult + " minutes to complete.")

// Task 2
let wedgesNeeded = 20;
let limes = ['small', 'large', 'medium', 'large', 'small'];
let wedgesCut = 0;
let limesCut = 0;
i = 0;

while (wedgesCut < wedgesNeeded && i < limes.length){
    if (limes[i]=='small'){
        wedgesCut += 6;
    }
    else if (limes[i]=="medium"){
        wedgesCut += 8;
    }
    else if (limes[i]=="large"){
        wedgesCut += 10;
    }
    limesCut ++;
    i ++;
}

console.log("Wedges Cut: " + wedgesCut);
console.log("Limes Cut: " + limesCut);

// Task 3
let timeLeft = 4; //minutes left in Li Mei's shift.
let totalTime = 0;
let orderTrack = [];
let index = 0;

let orders = ["Energizer", "All or Nothing"];

for (let i = 0; i < orders.length; i++){
    let juice = orders[i];

    if (orders[i] == "Pure Strawberry Joy"){
        timeToMixJuiceResult = 0.5;
    }
    else if (orders[i] == "Energizer" || orders[i] == "Green Garden") {
        timeToMixJuiceResult = 1.5;
    }
    else if (orders[i] == "Tropical Island"){
        timeToMixJuiceResult = 3;
    }
    else if (orders[i] == "All or Nothing"){
        timeToMixJuiceResult = 5;
    }
    else{
        timeToMixJuiceResult = 2;
    }
    
    orderTrack.push(juice);
    totalTime += timeToMixJuiceResult;
}

while (totalTime < timeLeft && index < orderTrack){

}