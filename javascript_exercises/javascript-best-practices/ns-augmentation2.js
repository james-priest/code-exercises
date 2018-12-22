/**
 * Augmented Module
 */

CAVESOFCLARITY = ( function( caves ) {
    var sandScript = '';
    caves.setSandScript = function( message ) {
        sandScript = message;
    };
    return caves;
} )( CAVESOFCLARITY );

// In simple augmentation, the module file and the augmentation file do not
// share their private state. Augmented module properties may only access the
// private data from their file's closure. Private data from the original closure
// will not be lost, and will be accessible to all original properties that referenced it 