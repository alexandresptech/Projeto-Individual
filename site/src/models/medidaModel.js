var database = require("../database/config");

function inserirModel(pontos, idpontos) {
    instrucaoSql = `insert into jogo values (
                    ${pontos},
                    ${idpontos}
    )`
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    inserirModel
}
