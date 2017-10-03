// require console log shorthand functions
const log = require( '../cl.js' );

var booksArray = ["Great Expectations", "Peter Pan"];
var myBox = {
    height: 6, width: 8, length: 10, volume: 0,
    material: "cardboard",
    contents: booksArray
};

log.cll("myBox.width", myBox.width); // 8

log.cll("myBox.material", myBox.material); // cardboard

log.cll("myBox.contents", myBox.contents); // [ 'Great Expectations', 'Peter Pan' ]

// update property value
myBox.width = 12;
log.cll("myBox.width", myBox.width); // 12
log.cll("myBox.volume-before", myBox.volume); // 0
myBox.volume = myBox.length * myBox.height * myBox.width;
log.cll("myBox.volume-after", myBox.volume); // 720

// update property value for array
myBox.contents.push("On The Road");
log.cll("myBox.contents", myBox.contents); // [ 'Great Expectations', 'Peter Pan', 'On The Road' ]

log.cl("");
myBox.destination1 = "Miami";
myBox.destination2 = "Orlando";
myBox["# of stops"] = 2;
log.cll("myBox[\"# of stops\"]", myBox["# of stops"]);

for (var i = 1; i <= myBox["# of stops"]; i++) {
    log.cll("myBox.destination" + i, myBox["destination" + i]);
}

log.cl("");

log.cl("delete myBox.contents");
delete myBox.contents;

log.cl("create \"# of Books\" & set to 0");
myBox["# of Books"] = 0;

function addBook(box, name, writer) {
    box["# of Books"]++;
    box["book" + box["# of Books"]] = { title: name, author: writer };
}

addBook(myBox, "Romeo and Juliette", "Bill Shakespeare");
addBook(myBox, "The Raven", "Edgar Allan Poe");
addBook(myBox, "Peter Pan", "J.M. Barrie");

for (var j = 1; j <= myBox["# of Books"]; j++) {
    log.cll("myBox[book" + j + "]", myBox["book" + j]);
}

log.cl("");
log.clt("Ways of accessing nested object");
log.cll("myBox.book1.title", myBox.book1.title);
log.cll("myBox[\"book2\"][\"author\"]", myBox["book2"]["author"] );