var array = [ 'Inverted Peninsula', ',',
    'Inverted Peninsula', ', ', 'I', '—',
    'P', '...', 'hmmm', '.'
];
var internalThoughts = '';

console.time( 'Outer Test' );

internalThoughts = array.join( ' ' );

console.time( 'innerTest' );
console.log( internalThoughts );
console.timeEnd( 'innerTest' );

console.timeEnd( 'Outer Test' );