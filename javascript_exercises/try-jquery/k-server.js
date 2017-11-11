var express = require( 'express' );
var app = express();

app.use( express.static( __dirname ) );

app.get( '/favorites', function( request, response ) {
   
    var locations = [];
    locations.push( '{ "image": "images/paris.jpg", "name": "Paris, France" }' );
    locations.push( '{ "image": "images/newyork.jpg", "name": "New York, USA" }' );
    locations.push( '{ "image": "images/london.jpg", "name": "London, England" }' );    
    var result = '[' + locations.join( ', ' ) + ']';

    response.writeHead( 200, { 'content-type': 'application/json' } );
    response.end( result );
    // console.log( result );
    console.log( 'Handled request' );

} );

var port = 8080;
app.listen( port, function() {
    console.log( 'Listening on port:', port );
} );