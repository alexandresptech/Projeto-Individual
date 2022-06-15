var database = require("../database/config");

function inserirModel(pontoFinal, idusuario) {
    instrucaoSql = `insert into jogo values (
                    ${idusuario},
                    ${pontoFinal}
    )`
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarPontosModel() {
    instrucaoSql = `select avg(pontos) as 'Pontos' from jogo`
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    inserirModel,
    buscarPontosModel
}
