// require console log shorthand functions
const log = require( '../cl.js' );

var vehicle1 = { type: "Motorboat", capacity: 6, storedAt: "Ammunition Depot" };
var vehicle2 = { type: "Jet Ski", capacity: 1, storedAt: "Reef Dock" };
var vehicle3 = { type: "Submarine", capacity: 8, storedAt: "Underwater Outpost" };
/**
 * One of the ranger-devs wants to check how many rangers can go to battle the pirates using the Motorboat vehicle.

Using one line of code, access the correct property value (with dot notation), and log the amount of rangers that can join the fun to the console.
 */
log.cll("vehicle1.capacity", vehicle1.capacity);
/**
 * Now the ranger-devs have asked you to build a findVehicle function that will accept a vehicle name and list of vehicle objects, and return the current storage location of the requested vehicle.

1. Put all the vehicle objects in a vehicles array. Use the array literal syntax and pass in each of the vehicle variable names.
2. Build a function expression assigned to a findVehicle variable, which accepts name and list parameters for the name of the individual vehicle sought and the full array of vehicles.
3. Inside the findVehicle function, use a for loop to loop through all of the vehicles.
4. if the type of the current object in the list matches the name parameter, then return the current object’s storedAt location.
5. Call the findVehicle function and pass in the correct arguments to find the storage location of the "Submarine".
 */
var vehicles = [vehicle1, vehicle2, vehicle3];

var findVehicles = function (name, list) {
    for (var i = 0; i < list.length; i++) {
        if (list[i].type == name) {
            return list[i].storedAt;
        }
    }
};

log.cll("findVehicles(\"Submarine\", vehicles)", findVehicles("Submarine", vehicles));
/**
 * From the reports of the pirates near Lighthouse Rock, the ranger-devs have determined that the opposition has seriously stepped up their game.

They need to add some important information and power upgrades to their existing vehicles. New properties will be added for weapon (which gets a String) and submersible (which gets a Boolean).

Use dot notation to make the following changes and additions, in order, to the vehicle objects:
*/
// 1. The Motorboat will have 4 seats added to its capacity.
vehicle1.capacity += 4;
// 2. The Jet Ski is not submersible.
vehicle2.submersible = false;
// 3. The Submarine will acquire "Torpedoes".
vehicle3.weapon = "Torpedoes";
// 4. The Motorboat is not submersible.
vehicle1.submersible = false;
// 5. The Jet Ski will acquire "Lasers".
vehicle2.weapon = "Lasers";
// 6. The Submarine will add bunk beds, doubling its capacity.
vehicle3.capacity *= 2;
// 7. The Motorboat will acquire a "Rear-Mounted Slingshot".
vehicle1.weapon = "Rear-Mounted Slingshot";
// 8. The Submarine is submersible.
vehicle3.submersible = true;
/**
 * The ranger-devs are happy with the modifications to the vehicles. They need one last modification, though, so that they can know what sort of firepower they are able to use on each vehicle.

Add a property called # of weapons to each vehicle using bracket notation. Then, consult the current objects and properties to assign the following values to the correct objects:
*/
// There are 8 "Torpedoes".
vehicle3["# of weapons"] = 8;
// There are 4 "Lasers".
vehicle2["# of weapons"] = 4;
// There is 1 "Rear-Mounted Slingshot".
vehicle1["# of weapons"] = 1;
