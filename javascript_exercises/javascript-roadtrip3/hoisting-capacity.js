// Here we get an error because we are using assignment of the function expressions to variables which 
// are hoisted to have undefined as a value but have not been assigned the function prior to the variable function being called

// this can be fixed by one of two ways:
// 1. Changing order - so conditional code is at bottom
// 2. Not have FEs at all and instead have declared function
function capacityStatus(numPassengers, capacity) {
    if (numPassengers == capacity) {
        noSeats();
    } else {
        seatsAvail();
    }

    var noSeats = function () {
        console.log("No seats left!");
        return false;
    };

    var seatsAvail = function () {
        console.log("There are " + (capacity - numPassengers) + " seats left!");
    };
}

// Option 1 - Changing order - so conditional code is at bottom
function capacityStatus(numPassengers, capacity) {
    var noSeats = function () {
        console.log("No seats left!");
        return false;
    };

    var seatsAvail = function () {
        console.log("There are " + (capacity - numPassengers) + " seats left!");
    };
    
    if (numPassengers == capacity) {
        noSeats();
    } else {
        seatsAvail();
    }
}

// Option 2 - Not have FEs at all and instead have declared function
function capacityStatus(numPassengers, capacity) {
    if (numPassengers == capacity) {
        noSeats();
    } else {
        seatsAvail();
    }

    function noSeats () {
        console.log("No seats left!");
        return false;
    }

    function seatsAvail () {
        console.log("There are " + (capacity - numPassengers) + " seats left!");
    }
}

capacityStatus(10, 20);