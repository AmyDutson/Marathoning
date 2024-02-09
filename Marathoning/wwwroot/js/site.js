// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

$(document).ready(function () {
    // Function to validate if the input is a positive number
    function isValidInput(input) {
        return !isNaN(input) && input > 0;
    }

    // Event handler for the calculate button
    $("#calculateBtn").click(function () {
        // Get the user input
        var hours = parseFloat($("#hours").val());

        // Validate the input
        if (isValidInput(hours)) {
            // Retrieve hourly rate from the model
            var hourlyRate = parseFloat($("#hourlyRate").val().replace("$", ""));

            // Calculate the total
            var total = hours * hourlyRate;

            // Display the total in the output box
            $("#total").val("$" + total.toFixed(2));
        } else {
            alert("Please enter a valid positive number for the hours.");
        }
    });
});
