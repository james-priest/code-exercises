function destroyer(arr) {
    var output = [];
    for (var y = 1; y < arguments.length; y++) {
        output.push(arguments[y]);
    }

    function destroy(value) {
        for (var x = 0; x < output.length; x++) {
            if (value === output[x]) {
                return false;
            }
        }
        return true;
    }
    return arr.filter(destroy);
}

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));