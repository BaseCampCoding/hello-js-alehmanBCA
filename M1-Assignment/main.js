// Task 1
let yearsOfExperience = 0;
let levelOfExperience = '';

//given a total number of years of study, returns the user's level of experience
function experience(yearsOfExperience) {
    if (yearsOfExperience >= 0 && yearsOfExperience <= 1) {
        levelOfExperience = "Beginner";
    }
    
    else if (yearsOfExperience >= 1 && yearsOfExperience < 3) {
        levelOfExperience = "Intermediate";
    }

    else if (yearsOfExperience >= 3 && yearsOfExperience < 6) {
        levelOfExperience = "Advanced";
    }

    else {
        levelOfExperience = "Master";
    }
}

