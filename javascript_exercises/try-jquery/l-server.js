var express = require( 'express' );
var app = express();

app.use( express.static( __dirname ) );

app.get( '/status', function( request, response ) {

    var flights = [];
    flights.push( JSON.stringify( { name: 'JFK - New York, NY', status: 'Departing Location' } ) );
    flights.push( JSON.stringify( { name: 'DEN - Denver, CO', status: 'Connecting Flight' } ) );
    flights.push( JSON.stringify({ name: 'SFO - San Francisco, CA', status: 'Destination' } ) );
        
    var result = '[' + flights.join( ', ' ) + ']';

    response.writeHead( 200, { 'content-type': 'application/json' } );
    response.end( result );
    // console.log( result );
    console.log( 'Handled request' );

} );

var port = 8080;
app.listen( port, function() {
    console.log( 'Listening on port:', port );
} );