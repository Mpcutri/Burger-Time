// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
  $(".devour-burger").on("click", function(event) {
    var id = $(this).data("id"); // is this "id" referring to the unique id in the SQL table?
    var newDevoured = $(this).data("newDevoured");

    var newDevouredState = { 
      devoured: 1
    };

    // Send the PUT request.
    $.ajax("/api/devoured/" + id, {
      type: "PUT",
      data: newDevouredState
    }).then(
      function() {
        console.log("changed devoured to", newDevoured);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
});

$(function() { // WHY DOES IT NEED TO BE CONTAINED WITHIN A FUNCTION
  $("#submit-burger").on("click", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();
        console.log("THE CLICKED WORKED!");

    var newBurger = {
      burger_name: $("#user-burger-input").val().trim()
    };
    console.log(newBurger);

    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function() {
        console.log("created new burger");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
}); // WHY DOES IT NEED TO BE CONTAINED WITHIN A FUNCTION
