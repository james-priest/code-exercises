var express = require( 'express' );
var app = express();
var formidable = require( 'formidable' );

app.use( express.static( __dirname ) );

app.post( '/book', function( request, response ) {
    var form = new formidable.IncomingForm();
    form.parse( request, function( err, fields ) {
        var dest = fields.destination,
            qty = +fields.quantity,
            cost = (qty * 299.00).toFixed(2),
            responseJSON = '{ "location": "' + dest + '", "totalPrice": "' + cost + '", "nights": "' + qty + '", "confirmation": "345feab" }';
        
        if ( err ) {
            console.error( err );
            console.log( form );
            return 0; // needed else program halts on error
        }
        response.writeHead( 200, { 'content-type': 'application/json' } );
        response.end( responseJSON );
        console.log( 'Handled post request' );
    } );
} );

var port = 8080;
app.listen( port, function() {
    console.log( 'Listening on port:', port );
} );