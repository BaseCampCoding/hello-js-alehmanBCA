let knightIsAwake = true;
let archerIsAwake = false;
let prisonerIsAwake = true;
let petDogIsPresent = true;

// Task 1
let canExecuteFastAttack;
if (knightIsAwake == false) {
    canExecuteFastAttack = true;
}
else{
    canExecuteFastAttack = false;
}

console.log("Can Execute Fast Attack: " + canExecuteFastAttack);

//or

// canExecuteFastAttack = !knightIsAwake;

// Task 2
let canSpy;

if (knightIsAwake==true || archerIsAwake==true || prisonerIsAwake==true){
    canSpy = true;
}
else {
    canSpy = false;
}

console.log("Can Spy: " + canSpy);

//or

//canSpy = knightIsAwake || archerIsAwake || prisonerIsAwake;

// Task 3
let canSignalPrisoner;
if (prisonerIsAwake==true && archerIsAwake==false){
    canSignalPrisoner = true;
}
else{
    canSignalPrisoner = false;
}

console.log("Can Signal Prisoner: " + canSignalPrisoner);

//or 

//canSignalPrisoner =  prisonerIsAwake && !archerIsAwake;

// Task 4
let canFreePrisoner;
if ((petDogIsPresent==true && archerIsAwake==false) || (petDogIsPresent==false && prisonerIsAwake==true && knightIsAwake==false && archerIsAwake==false)){
    canFreePrisoner = true;
}
else{
    canFreePrisoner = false;
}

console.log("Can Free Prisoner: " + canFreePrisoner);

//or

// canFreePrisoner = (petDogIsPresent && !archerIsAwake) || (!dogIsPresent && prisonerIsAwake && !knightIsAwake && !archerIsAwake);
