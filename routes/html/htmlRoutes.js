const router = require("express").Router();
const path = require("path");

router
  .route("/")
  .get(function(req, res) {
   // SEND HOME PAGE USING RES.SENDFILE AND PATH.JOIN()
   res.sendFile(path.join(__dirname, "../../public/assets/home.html"));
  });

router
  .route("/notes")
  .get(function (req, res) {
    // SEND NOTES PAGE USING RES.SENDFILE AND PATH.JOIN()
    res.sendFile(path.join(__dirname, "../../public/assets/notes.html"));
  });

module.exports = router;
