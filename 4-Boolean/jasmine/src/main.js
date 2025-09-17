let knightIsAwake = true;
let archerIsAwake = false;
let prisonerIsAwake = true;
let petDogIsPresent = true;
let canExecuteFastAttack;
let canSpy;
let canSignalPrisoner;
let canFreePrisoner;

// Task 1
if (knightIsAwake == false) {
    canExecuteFastAttack = true;
}
else{
    canExecuteFastAttack = false;
}

// Task 2
if (knightIsAwake==true || archerIsAwake==true || prisonerIsAwake==true){
    canSpy = true;
}
else{
    canSpy = true;
}

// Task 3
if (prisonerIsAwake==true && archerIsAwake==false){
    canSignalPrisoner = true;
}
else{
    canSignalPrisoner = false;
}

// Task 4
if ((petDogIsPresent==true && archerIsAwake==false) || (petDogIsPresent==false && prisonerIsAwake==true && knightIsAwake==false && archerIsAwake==false)){
    canFreePrisoner = true;
}
else{
    canFreePrisoner = false;
}