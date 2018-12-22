/**
 * Most web APIs transfer data in a format called JSON. JSON stands for JavaScript Object Notation.

You've already been using JSON whenever you create a JavaScript object. JSON is nothing more than object properties and their current values, sandwiched between a { and a }.

These properties and their values are often referred to as "key-value pairs".

Let's get the JSON from freeCodeCamp's Cat Photo API.

$.getJSON("/json/cats.json", function(json) {
  $(".message").html(JSON.stringify(json));
});

Once you've added this, click the "Get Message" button. Your Ajax function will replace the "The message will go here" text with the raw JSON output from the Free Code Camp Cat Photo API.
 */

$(document).ready(funciton() {
    $("#getMessage").on("click", function () {
        $.getJSON("/json/cats.json", function (json) {
            $(".message").html(JSON.stringify(json));
        });
    });
});