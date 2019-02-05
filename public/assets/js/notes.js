$(document).ready({

  $("#makeNote").on("click", function() {
    let newNote = userNote.val().trim();
    $("#postedNotesView").append(newNote);
  });

});