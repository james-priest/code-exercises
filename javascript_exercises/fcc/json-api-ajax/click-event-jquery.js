/**
 * First, let's review what the $(document).ready() function does. This function runs such that all of the code inside of it executes only once our page has finished loading.

So Let's start by implementing a click event handler inside of our $(document).ready() function by adding this code:
 */
$(document).ready(function () {
    $("#getMessage").on("click", function () {
        // Only change code below this line.
        $(".message").html("Here is the message");
        // Only change code above this line.
    });
});