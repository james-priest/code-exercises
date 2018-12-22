var express = require( 'express' );
var app = express();
var formidable = require( 'formidable' );

app.use( express.static( __dirname ) );

app.post( '/book', function( request, response ) {
    var form = formidable.IncomingForm();
    form.parse( request, function( err, fields ) {
        var dest = fields.destination,
            qty = fields.quantity,
            responseText1 = "<p>Your vacation to Paris, France has been booked for $2,196.00 for 4 nights. Confirmation #345feab</p>",
            responseText2 = '<h1>Your Results</h1>Destination: ' + dest + '<br>Tickets: ' + qty;
        
        response.writeHead( 200, { 'content-type': 'text/html' } );
        response.end( responseText2 );
        console.log( 'Handled post request' );
    } );
} );

var port = 8080;
app.listen( port, function() {
    console.log( 'Listening on port:', port );
} );