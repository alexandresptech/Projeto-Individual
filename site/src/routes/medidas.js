var express = require("express");
var router = express.Router();

var medidaController = require("../controllers/medidaController");

router.get("/ultimas/:idMitologia", function (req, res) {
    medidaController.buscarUltimasMedidas(req, res);
});

router.get("/tempo-real/:idMitologia", function (req, res) {
    medidaController.buscarMedidasEmTempoReal(req, res);
})

router.post("/inserir", function (req, res) {
    console.log('Chegou na rota Medidas!')
    medidaController.inserirController(req, res);
});

module.exports = router;