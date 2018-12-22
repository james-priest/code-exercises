// Rearrange in the order it is processed by the compiler
function theBridgeOfHoistingDoom() {
    function fellowship() {
        return "friends";
    }
    var sword = "sting";
    var dwarf = function () {
        return "axe";
    };
    var fall = "Fly you fools!";
    fellowship = function () {
        return "broken";
    };
    ring();
    return sword;
    fellowship = function () {
        return "mines";
    };
    sword = function () {
        return "glamdring";
    };
    var ring = function () {
        return "precious";
    };
}

// becomes this:
function theBridgeOfHoistingDoom() {
    var sword = undefined;
    var dwarf = undefined;
    var fall = undefined;
    var ring = undefined;

    function fellowship() {
        return "friends";
    }

    sword = "sting";
    dwarf = function () {
        return "axe";
    };
    fall = "Fly you fools!";
    fellowship = function () {
        return "broken";
    };
    ring();
    return sword;
}