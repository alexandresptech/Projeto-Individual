var medidaModel = require("../models/medidaModel");

function inserirController(req, res) {
    var pontoFinal = req.body.pontoFinal;
    var idusuario = req.body.idUsuario;
    medidaModel.inserirModel(pontoFinal, idusuario).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao inserir os valores.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function buscarPontosController(req, res) {

    medidaModel.buscarPontosModel().then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

module.exports = {
    inserirController,
    buscarPontosController
}