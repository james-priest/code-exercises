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

( function() {
    this.VehicleNS = this.VehicleNS || {};
    var ns = this.VehicleNS;

    // private data
    var _vehicleList = [];    
    var _vehicleCount = 0;

    // private methods
    var _addVehicle = function( item ) {    
        _vehicleList.push( item );
        _vehicleCount++;
    };

    // public methods
    ns.addVehicle = function( vehicle ) {
        _addVehicle( vehicle );
    };
    ns.getVehicle = function( index ) {
        if ( index == undefined ) {
            return _vehicleList;
        }
        else {
            return _vehicleList[index];
        }
    };
    ns.getVehicleCount = function() {
        // console.log( 'vehicle count:', _vehicleCount );
        return _vehicleCount;
    };
    
    // public constructors
    ns.Vehicle = ( function() { 
        function Vehicle( theYear, theMake, theModel ) {
            this.year = theYear;
            this.make = theMake;
            this.model = theModel;
        }
        Vehicle.prototype.getInfo = function() {
            return this.year + ' ' + this.make + ' ' + this.model;
        };
        Vehicle.prototype.startEngine = function() {
            return 'Vroom';
        };
        return Vehicle;
    } )();
    
    ns.Car = ( function( parent ) {
        Car.prototype = new ns.Vehicle();
        Car.prototype.console = Car;
        function Car( year, make, model ) {
            parent.call( this, year, make, model );
            this.wheelQuantity = 4;
        }
        Car.prototype.getInfo = function() {
            return "Vehicle Type: Car " + parent.prototype.getInfo.call( this );
        };
        return Car;
    } )(ns.Vehicle);
    
} )();


// var VEHICLE = VehicleNS;

// MUST have *new* keyword
// var v = new VEHICLE.Vehicle( 2008, "Honda", "Element" ); 
// console.log( "v:", v);
// console.log( "v.getInfo():", v.getInfo() );

test( "Namespace test", function( t ) {
    // t.plan( 6 );
    var actual, expected;

    // console.log( " --- public vars and methods ---" );
    t.comment( "--- public vars and methods ---" );
    t.ok( VehicleNS, "VehicleNS exists");

    actual = VehicleNS.getVehicleCount();
    expected = 0;
    t.isEqual( actual, expected, "VehicleNS.getVehicleCount() is 0" );

    var obj = { year: 2014, make: 'Kia', model: 'Soul' };
    t.comment( "var obj = { year: 2014, make: 'Kia', model: 'Soul' };" );
    VehicleNS.addVehicle( obj );
    // console.log( " --> VehicleNS.addVehicle( obj );" );
    t.comment("VehicleNS.addVehicle( obj );")

    actual = VehicleNS.getVehicleCount();
    expected = 1;
    t.isEqual( actual, expected, "VehicleNS.getVehicleCount() is 1" );

    // console.log( ' --> var v = new VehicleNS.Vehicle( 2008, "Honda", "Element" );' );
    t.comment( 'var v = new VehicleNS.Vehicle( 2008, "Honda", "Element" );' );
    var v = new VehicleNS.Vehicle( 2008, "Honda", "Element" );
    t.ok( v, "v exists" );

    t.assert( v instanceof VehicleNS.Vehicle, "v instanceof VehicleNS.Vehicle" );

    actual = v;
    expected = { year: 2008, make: 'Honda', model: 'Element' };
    t.deepEqual( actual, expected, "v contains expected" );


    VehicleNS.addVehicle( v );
    // console.log( " --> VehicleNS.addVehicle( v );" );
    t.comment("VehicleNS.addVehicle( v );");

    actual = VehicleNS.getVehicleCount();
    expected =2;
    t.isEqual( actual, expected, "VehicleNS.getVehicleCount() is 2" );

    // console.log( ' --> var c = new VehicleNS.Car( 2000, "Ford", "Fusion" );' );
    t.comment( 'var c = new VehicleNS.Car( 2000, "Ford", "Fusion" );' );
    var c = new VehicleNS.Car( 2000, "Ford", "Fusion" );
    t.ok( c, "c exists" );

    
    actual = c;
    expected = { year: 2000, make: 'Ford', model: 'Fusion', wheelQuantity: 4 };
    t.deepEqual( actual, expected, "c contains expected" );

    // t.comment( "-> comment" );
    t.assert( c instanceof VehicleNS.Car, "c instanceof VehicleNS.Car" );

    VehicleNS.addVehicle( c );
    // console.log( ' --> VehicleNS.addVehicle( c );' );
    t.comment( "VehicleNS.addVehicle( c );" );
    
    actual = VehicleNS.getVehicleCount();
    expected = 3;
    t.isEqual( actual, expected, "VehicleNS.getVehicleCount() is 3" );

    t.end();

    //console.log( VEHICLE.getVehicle().pop() );
    var x = VehicleNS.getVehicle();
    console.dir( x );


} );
