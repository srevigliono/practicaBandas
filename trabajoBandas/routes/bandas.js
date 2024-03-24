const express = require("express");
const router = express.Router();
const bandasController = require("../controllers/bandasController")

router.get("/", bandasController.index);
  
module.exports = router;




