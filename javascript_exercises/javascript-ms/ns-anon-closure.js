const test = require( 'tape' );
/**
 * JavaScript namespace anonymous closure module
 * Three parts: private data, private methods, public methods
 * Public methods are used to access private methods
 *   which act on private data
 * Pattern: public method -> private method -> private data
 *
 * In short...
 * Private properties are created in the local scope of the function expression.
 * Public properties are built within the object which is then returned to become the namespace.
 * Access to private data is thus possible only because of closure within the larger module
 */

// var VEHICLE = VEHICLE || {};

var VEHICLE = ( function() {
    // private data        
    var vehicleList = [];    
    var repairList = [{               
        description: 'changed spark plugs',
        cost: 100
    }];
    var vehicleCount = 0;

    // private methods
    var addVehicle = function( item ) {    
        vehicleList.push( item );
        vehicleCount++;
    };
    var updateRepairArray = function(desc, cost) {
        repairList.push( [desc, cost] );
    };
    
    // public methods
    return {
        addVehicle: function( vehicle ) {
            addVehicle( vehicle );
        },
        getVehicleCount: function() {
            // console.log( 'vehicle count:', _vehicleCount );
            return vehicleCount;
        },
        getVehicle: function( index ) {
            if ( index == undefined ) {
                return vehicleList;
            }
            else {
                return vehicleList[index];
            }
        },
        addRepair: function(repair) {
            updateRepairArray( repair[ 0 ], repair[ 1 ] );
        },
        getRepairs: function() {
            // console.log( repairs );
            return repairList;
        },
        
        // constructor functions
        Car: function( theYear, theMake, theModel ) {
            var car = { year: theYear, make: theMake, model: theModel };
            return car;
        },    
        Truck: function( theYear, theMake, theModel, theLength ) {
            var truck = { year: theYear, make: theMake, model: theModel, length: theLength };
            return truck;
        }
    };
} )();


test( "Namespace test", function( t ) {
    // t.plan( 6 );
    var actual, expected;

    console.log(" --- public vars and methods ---")
    t.ok( VEHICLE, "VEHICLE exists");

    actual = VEHICLE.getVehicleCount();
    expected = 0;
    t.isEqual( actual, expected, "VEHICLE.getVehicleCount() is 0" );

    VEHICLE.addVehicle( { year: 2014, make: 'Kia', model: 'Soul' } );
    console.log( " --> VEHICLE.addVehicle( { year: 2014, make: 'Kia', model: 'Soul' } );" );

    actual = VEHICLE.getVehicleCount();
    expected = 1;
    t.isEqual( actual, expected, "VEHICLE.getVehicleCount() is 1" );

    console.log( ' --> VEHICLE.Car( 2000, "Ford", "Fusion" );' );
    actual = VEHICLE.Car( 2000, "Ford", "Fusion" );
    expected = { year: 2000, make: "Ford", model: "Fusion" };
    t.deepEqual( actual, expected, 'VEHICLE.Car returns { year: 2000, make: "Ford", model: "Fusion" }' );

    VEHICLE.addVehicle( VEHICLE.Car( 2000, "Ford", "Fusion" ) );
    console.log( ' --> VEHICLE.addVehicle( VEHICLE.Car( 2000, "Ford", "Fusion" ) );' );
    actual = VEHICLE.getVehicleCount();
    expected = 2;
    t.isEqual( actual, expected, "VEHICLE.getVehicleCount() is 2" );

    VEHICLE.addVehicle( VEHICLE.Car( 2010, "BMW", "Z4" ) );
    console.log( ' --> VEHICLE.addVehicle( VEHICLE.Car( 2010, "BMW", "Z4" ) );' );
    actual = VEHICLE.getVehicleCount();
    expected = 3;
    t.isEqual( actual, expected, "VEHICLE.getVehicleCount() is 3" );

    t.end();

    //console.log( VEHICLE.getVehicle().pop() );
    console.log( VEHICLE.getVehicle() );
} );

