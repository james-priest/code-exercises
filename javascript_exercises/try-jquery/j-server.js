var express = require( 'express' );
var app = express();

app.use( express.static( __dirname ) );

app.get( '/favorite/1', function( request, response ) {
   
    var location = '{ "image": "images/paris.jpg", "name": "Paris, France" }'; 

    response.writeHead( 200, { 'content-type': 'application/json' } );
    response.end( location );
    console.log( 'Handled post request' );

} );

var port = 8080;
app.listen( port, function() {
    console.log( 'Listening on port:', port );
} );