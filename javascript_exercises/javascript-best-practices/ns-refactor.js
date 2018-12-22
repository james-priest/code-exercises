// refactor to use a namespace

// old
var stalactites = 4235;
var stalagmites = 3924;
var bats = 345;
var treasureChests = 3;
var openChest = function() {
    treasureChests--;
    alert( 'DA DADADA DAAAAAAA!' );
};

// new (with namespace)
var CAVESOFCLARITY = {
    stalagmites: 4235,
    stalactites: 3924,
    bats: 345,
    SECRET: {
        treasureChests: 3,
        openChest: function() {
            this.treasureChests--;
            console.log( "DA DADADA DAAAAAAA!" );
        }
    }
};