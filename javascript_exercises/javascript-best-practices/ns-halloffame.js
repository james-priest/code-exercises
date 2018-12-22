//const log = require( '../cl.js' );
/**
 * JavaScript simulated Namespace
 * though not native to JS the namespace concept can limit global impact
 */

// The key to creating a namespace is a single global Object called the "wrapper"
var HOFMASTER = {
    list: [ "Jar Treen", "Maximo Rarter", "Pol Grist" ],
    hof: document.getElementById( "hof" ),
    fragment: document.createDocumentFragment(),
    element: undefined,
    displayHOF: function() {
        for ( var i = 0, x = this.list.length; i < x; i++ ) {
            this.element = document.createElement( "li" );
            this.element.appendChild( document.createTextNode( this.list[ i ] ) );
            this.fragment.appendChild( this.element );
        }
        this.hof.appendChild( this.fragment );
    },
    BIOGRAPHIES: {
        "Jar Teen": "some text on Jar",
        "Maximo Rarter": "some text on Maximo",
        "Pol Grist": "some text on Pol",
        list: [ "some", "list", "info" ],
        unfoldBio: function( member ) {
            var bio = "text from " + this.member + " to some element";
        }
    }
};
