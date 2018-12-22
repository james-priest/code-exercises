const test = require( 'tape' );
/**
 * JavaScript namespace anonymous closure
 */

// var VEHICLE = VEHICLE || {};

var VEHICLE = ( function() {
    // private vars (private properties)
    var _vehicleCount = 5;          // private
    var _vehicles = new Array();    // private
    var _repairs = [{               // private
        description: 'changed spark plugs',
        cost: 100
    }];
    // private function expression (private method)
    var updateRepairArray = function(desc, cost) {
        _repairs.push( [desc, cost] );
    };
    // private function (private method) - better to do an FE like above
    function addVehicle( item ) {    // private
        _vehicleCount++;
        _vehicles.push( item );
    }

    return {
        // public property
        vehicleCount: _vehicleCount, // this doesn't update the private var; use setter
        // public method
        addVehicle: function( vehicle ) { // setter
            addVehicle( vehicle );
        },
        getVehicleCount: function() { // getter
            // console.log( 'vehicle count:', _vehicleCount );
            return _vehicleCount;
        },
        addRepair: function(repair) { // setter
            updateRepairArray( repair[ 0 ], repair[ 1 ] );
        },
        getRepairs: function() { // getter
            // console.log( repairs );
            return repairs;
        },
        
        // public methods (constructor functions)
        Car: function() { },    // public fe
        Truck: function() { }   // public fe
    };
} )();


test( "Namespace test", function( t ) {
    // t.plan( 6 );
    var actual, expected;

    console.log(" --- public vars and methods ---")
    t.ok( VEHICLE, "VEHICLE exists");
    t.ok( VEHICLE.vehicleCount, "VEHICLE.vehicleCount exists");

    t.isEqual( VEHICLE.vehicleCount, 5, "VEHICLE.vehicleCount is 5" );
    VEHICLE.vehicleCount++;
    console.log(" --> VEHICLE.vehicleCount++;");
    t.isEqual( VEHICLE.vehicleCount, 6, "VEHICLE.vehicleCount is 6");

    t.isNotEqual( VEHICLE.getVehicleCount(), 6, "VEHICLE.getVehicleCount is not 6" );

    VEHICLE.addVehicle( { year: 2014, make: 'Kia', model: 'Soul' } );
    console.log( " --> VEHICLE.addVehicle( { year: 2014, make: 'Kia', model: 'Soul' } );" );
    t.isEqual( VEHICLE.getVehicleCount(), 6, "VEHICLE.getVehicleCount is 6");

    t.end();
} );

