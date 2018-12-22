var list = document.getElementById( "kotwList" );
var kotw = [ "Jenna Rangespike", "Neric Farthing", "Darkin Stonefield" ];

// Each new addition to the DOM causes a document "reflow", which hinders user experience
for ( var i = 0, x = kotw.length; i < x; i++ ) {
    var element = document.createElement( "li" );
    element.appendChild( document.createTextNode( kotw[ i ] ) );
    list.appendChild( element );
}

// We can use a document fragment to insert additions all at once
// Fragments are invisible containers that hold multiple DOM elements without being a node itself
// Also, avoid overuse of var keyword; rather use commas to separate variable declarations.
// Every var keyword adds a look-up for the JavaScript parser that can be avoided with comma extensions
// Also avoid var declarations in loops.
var list1 = document.getElementById( "kotwList1" ),
    kotw1 = [ "Jenna Rangespike", "Neric Farthing", "Darkin Stonefield" ],
    fragment = document.createDocumentFragment(),
    element1;

for ( var j = 0, y = kotw1.length; j < y; j++ ) {
    element1 = document.createElement( "li" );
    element1.appendChild( document.createTextNode( kotw1[ j ] ) );
    fragment.appendChild( element1 ); // we are now assigning each new li element to the staging fragment instead of to the document
}
list1.appendChild( fragment ); // we assign text nodes in a single fragment with one touch to the DOM

// Lastly, when concatenating a LARGE array of strings use Array.join() method rather than +=.