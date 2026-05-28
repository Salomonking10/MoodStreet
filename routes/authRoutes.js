const express = require("express");
const authController = require("../controllers/authController");

const router = express.Router();

router.get("/", authController.sesion);
router.post("/", authController.autenticacion);

module.exports = router;
