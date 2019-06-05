// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {

    $(".change-doit").on("click", function(event) {
      var id = $(this).data("id");
      var newDoit = $(this).data("newdoit");
  
      var newDoitState = {
        done: newDoit
      };
  
      // Send the PUT request.
      $.ajax("/api/todos/" + id, {
        type: "PUT",
        data: newDoitState
      }).then(
        function() {
          location.reload();
        }
      );
    });
  
    $(".create-form").on("submit", function(event) {
      event.preventDefault();
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
          location.reload();
        }
      );
    });
});