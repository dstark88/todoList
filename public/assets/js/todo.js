// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
    $(".change-doit").on("click", function(event) {
      var id = $(this).data("id");
      var newDoit = $(this).data("newdoit");
      console.log("newDoit", newDoit);
  
      var newDoitState = {
        done: newDoit
      };
  
      // Send the PUT request.
      $.ajax("/api/todos/" + id, {
        type: "PUT",
        data: newDoitState
      }).then(
        function() {
          console.log("changed doit to", newDoit);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    $(".create-form").on("submit", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
  console.log("in submit:");
      var newTodo = {
        todo_name: $("#ca").val().trim(),
        done: $("[name=done]:checked").val().trim()
      };
  
      // Send the POST request.
      $.ajax("/api/todos", {
        type: "POST",
        data: newTodo
      }).then(
        function() {
          console.log("created new todo");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
    $(".delete-todo").on("click", function(event) {
      var id = $(this).data("id");
  
      // Send the DELETE request.
      $.ajax("/api/todos/" + id, {
        type: "DELETE"
      }).then(
        function() {
          console.log("deleted todo", id);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
});