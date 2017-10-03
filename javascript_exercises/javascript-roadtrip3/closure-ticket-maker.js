const log = require('../cl.js');
// A closure can make the creation of very similar functions ultra-efficient

function buildCoveTicketMaker(transport) {
    return function (name) {
        console.log("Here is your transportation ticket via the " +
            transport + ".");
        console.log("Welcome to the Cold closure Cove, " + name + "!");
    };
}

var getSubmarineTicket = buildCoveTicketMaker("Submarine");

var getBattleshipTicket = buildCoveTicketMaker("Battleship");

var getGiantSeagullTicket = buildCoveTicketMaker("Giant Seagull");

log.cl();
getSubmarineTicket("James");
log.cl();
getBattleshipTicket("John");
log.cl();
getGiantSeagullTicket("Maria");
log.cl();

// BEWARE: Bound variable won't be evident in the stored function..
// Examining each function shows the same exact code
log.cld("getSubmarineTicket");
console.log(getSubmarineTicket.toString()); // here transport = Submarine; name = undefined (until function is called)
log.cld("getBattleshipTicket");
console.log(getBattleshipTicket.toString()); // here transport = Battleship; name = undefined (until function is called)
log.cld("getGiantSeagullTicket");
console.log(getGiantSeagullTicket.toString()); // here transport = Giant Seagull; name = undefined (until function is called)