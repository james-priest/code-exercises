
// switch is a conditional for multiple possibilities
// switch has fallthrough so think of case as a label where code execution *starts*
// case can be moved
exports.Knight = function( name, regiment ) {
    this.name = name;
    this.regiment = regiment;
    switch ( regiment ) {
        case 1:
            this.weapon = "Broadsword";
            break;
        case 2:
            this.weapon = "Claymore";
            break;
        case 3:
            this.weapon = "Longsword";
            break;
        case 5:
            this.weapon = "War Hammer";
            break;
        case 6:
            this.weapon = "Battle Axe";
            break;
        case 4:
        case 7:
        case 8:
            this.weapon = "Morning Star";
            break;
        case "King":
            this.weapon = "Excalibur";
            break;
        default:
            console.log( name + " has an incorrect regiment, Master Armourer! No weapon assigned!" );
    }
};