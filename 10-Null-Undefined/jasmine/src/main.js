// Task 1
let visitorName ='Geoff';
let visitorAge ='22';
let visitorTicketId ='71249';
const visitor = {'name':visitorName, 'age':visitorAge, 'ticketId':visitorTicketId}
console.log(visitor)

// Task 2
visitor['ticketId'] = 'null';
console.log(visitor);

// Task 3
const tickets = {Ticket:14};
console.log(tickets);
let ticketIdToCheck = 14;
let ticketStatusResult;

for (let key in tickets){
    if (tickets[key] == ticketIdToCheck){
        ticketStatusResult = 'Sold to ' + tickets.name;
        //Fix the above line of code so that it doesnt say 'undefined.'
        console.log(ticketStatusResult)
    }
    else{
        console.log("Good Bye")
    }
}
// *FINISH TASK 3*\\

// Task 4
let simpleTicketStatusResult;
//*FINISH TASK 4*\\

// Task 5
const visitorWithGtc = {};
let gtcVersion;
// *FINISH TASK 5*\\