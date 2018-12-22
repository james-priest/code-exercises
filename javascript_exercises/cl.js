/**
 * node exports syntax
 *
 * Was: function cl(name) { console.log("---------- " + name || ""); }
 * Now is:
 */
/**
 * console.log or new line
 */
exports.cl = function( data ) { console.log( data || "" ); };
/**
 * console.log with title
 */
exports.clt = function( title ) { console.log( title || "" ); };
/**
 * console.log with 2 space indent
 */
exports.cli = function( data ) { console.log( " ", data || "" ); };
/**
 * console.log with label. data is indented 2 spaces
 */
exports.cll = function( label, data ) { console.log( label ); console.log( " ", data ); };
/**
 * console.log with dashes before label
 */
exports.cld = function( label ) { console.log( "---------- " + label || "" ); };


