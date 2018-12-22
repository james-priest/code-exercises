const log = require( '../cl.js' );

function Bird() { }

function DatatypeBird() { }
DatatypeBird.prototype = Object.create( Bird.prototype );

var NumberNommer = function() {};
NumberNommer.prototype = Object.create( DatatypeBird.prototype );

var myNumberNommer = new NumberNommer();

log.cll( "myNumberNommer instanceof Bird", myNumberNommer instanceof Bird );
log.cll( "myNumberNommer instanceof DatatypeBird", myNumberNommer instanceof DatatypeBird);