    // Task 1
let dailyHours = 8;

let ratePerHour = 60;

// Finds the daily rate of the freelancer.
let dayRate = ratePerHour * dailyHours;

    // Task 2
let budget = 1000;

// Finds how many days that the person can work for their budget.
let workdays = Math.floor(budget/dayRate);

    // Task 3
let billable = 22;

let monthlyDiscount = (billable * dayRate) * .2;

// Divides the total number of project days by the amount
// of billable days rounded down to find the number of full 
// months that the freelancer will work
let fullMonths = Math.floor(35/billable); //35 is the # of days

// Find the remainder of 35/billable days to determine the 
// amount of remaining days screenLeft.
let remainingDays = Math.floor(35%billable);

// Multiply the number of billlable days by the daily rate and 
// the monthly discount to find the discounted monthly rate.
let discountedMonthlyRate = billable * dayRate - monthlyDiscount;

// Multiply the remaining days by the daily rate to find the 
// remaining cost.
let remainingCost = remainingDays * dayRate;

// Add the remaining cost and the discounted monthly rate 
// to find the total project cost.
let totalProjectCost = remainingCost + discountedMonthlyRate;