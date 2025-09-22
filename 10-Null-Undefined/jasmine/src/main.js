// Task 1
let visitorName ='Kaden';
let visitorAge =45;
let visitorTicketId ='Tic40';

const visitor = {
    'name' : visitorName, 
    'age' : visitorAge, 
    'ticketId' : visitorTicketId}

console.log("After adding first visitor:")
console.log(visitor)

// Task 2
visitor['ticketId'] = null;

console.log("After making ticket 'null.'");
console.log(visitor);

// Task 3
let tickets = {
    "Ticket48" : null,
    "Ticket49" : "Kaden"
};
let ticketIdToCheck = "Ticket49";
let ticketStatusResult;

if (!(ticketIdToCheck in tickets)) {
    ticketStatusResult = "unknown ticket id";
}

else if (tickets[ticketIdToCheck] == null) {
    ticketStatusResult = "not sold"
}

else {
    ticketStatusResult = "Sold to " + tickets[ticketIdToCheck];
}

console.log ("After the tickets were checked:");
console.log(ticketStatusResult)

// Task 4
let simpleTicketStatus;

if (ticketIdToCheck in tickets && tickets[ticketIdToCheck]) {
    simpleTicketStatus == tickets[ticketIdToCheck];
}

else {
    simpleTicketStatus = "invalid ticket";
}

console.log("After Simple Check: ")
console.log(simpleTicketStatus);

// Task 5
let visitorWithGtc = {
    name : "Kaden",
    gtc : {
        version : "2.0"
    },
    name : "Walker",
};

let gtcVersion;
if (visitorWithGtc.gtc && visitorWithGtc.gtc.version) {
    gtcVersion = visitorWithGtc.gtc.version;
}

console.log("After getting the version:");
console.log(gtcVersion);