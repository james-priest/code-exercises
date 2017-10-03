/**
 * node exports syntax
 *
 * Was: function cl(name) { console.log("---------- " + name || ""); }
 * Now is:
 */
exports.clt = function( title ) { console.log( title || "" ); };
exports.cl = function( data ) { console.log( data || "" ); };
exports.cll = function( title, data ) { console.log( title ); console.log( " ", data ); };

exports.cld = function( name ) { console.log( "---------- " + name || "" ); };
