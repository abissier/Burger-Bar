$(function () {
    //----------------- Update(Change Devoured State)-------------------------------
    //on click changes devoured to true 
    $(".change-devoured").on("click", function (event) {
        var id = $(this).data("id");
        var newDevoured = true;

        var newDevouredState = {
            devoured: newDevoured
        };
        // console.log("burger.js file new state " , newDevouredState)
        // console.log("burger js file ID ", id)
        // Send the PUT request to update devoured to true  
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newDevouredState
        }).then(
            function () {
                console.log("changed devoured to", newDevoured);
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });
    
    //-------------------(Insert) Add Burger To List ------------------------------------
    //on click event to add new burger
    $(".create-form").on("submit", function (event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();

        var newBurger = {
            name: $("#burger").val().trim(),
            devoured: false
        };

        // Send POST request to add new burger 
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function () {
                console.log("created new burger");
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });
});

