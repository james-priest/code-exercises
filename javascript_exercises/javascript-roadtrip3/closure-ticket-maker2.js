const log = require('../cl.js');
// A closure can make the creation of very similar functions ultra-efficient

function buildCoveTicketMaker(transport) {
    var passengerNumber = 0;
    return function (name) {
        passengerNumber++;
        console.log("Here is your transportation ticket via the " +
            transport + ".");
        console.log("Welcome to the Cold Closure Cove, " + name + "!");
        console.log("You are passenger #" + passengerNumber + ".");
    };
}

var getSubmarineTicket = buildCoveTicketMaker("Submarine");

var getBattleshipTicket = buildCoveTicketMaker("Battleship");

var getGiantSeagullTicket = buildCoveTicketMaker("Giant Seagull");

log.cld("getSubmarineTicket");
getSubmarineTicket("James");
getSubmarineTicket("Susie");
log.cld("getBattleshipTicket");
getBattleshipTicket("John");
log.cld("getGiantSeagullTicket");
getGiantSeagullTicket("Maria");



// BEWARE: Bound variable won't be evident in the stored function..
// Examining each function shows the same exact code
// cl("getSubmarineTicket");
// console.log(getSubmarineTicket.toString()); // here transport = Submarine; name = undefined (until function is called)
// cl("getBattleshipTicket");
// console.log(getBattleshipTicket.toString()); // here transport = Battleship; name = undefined (until function is called)
// cl("getGiantSeagullTicket");
// console.log(getGiantSeagullTicket.toString()); // here transport = Giant Seagull; name = undefined (until function is called)