const express = require("express");
const router = express.Router();
const bandasController = require("../controllers/bandasController")

router.get("/", bandasController.index);
router.get("/:idBanda",bandasController.banda);
router.get("/generos/:genero",bandasController.generos);

module.exports = router;




