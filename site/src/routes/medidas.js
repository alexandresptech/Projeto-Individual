var express = require("express");
var router = express.Router();

var medidaController = require("../controllers/medidaController");

router.post("/inserirPontos", function (req, res) {
    console.log('Chegou na rota Medidas!')
    medidaController.inserirController(req, res);
});

router.post("/buscarPontos", function (req, res) {
    console.log('Chegou na rota!')
    medidaController.buscarPontosController(req, res);
});

module.exports = router;