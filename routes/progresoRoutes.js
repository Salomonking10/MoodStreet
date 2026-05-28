const express = require("express");
const progresoController = require("../controllers/progresoController");

const router = express.Router();

router.use(progresoController.verificarSesion);
router.get("/", progresoController.consultar);
router.post("/", progresoController.guardar);

module.exports = router;
