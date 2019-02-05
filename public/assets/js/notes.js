//import dependencies
const router = require("express").Router();
const db = require("../../config/connection");

//tell the button with an id of start to serve the notes page on click
$("#start").on("click", function() {
  router.get("/", function (req, res) {
    // query database for all notes and send back as json
    db.query("SELECT * FROM notes", function(err, dbNotes) {
      if (err) {
        throw err;
      }
      res.json(dbNotes);
    });
  });
});