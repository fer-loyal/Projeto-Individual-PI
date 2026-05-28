var database = require("../database/config");

/* Insere na tabela quiz e retorna o resultado */
function salvarQuiz(pontuacaoFinal, porcentagem, idUsuario) {
    console.log("ACESSEI O QUIZ MODEL - function salvarQuiz():", pontuacaoFinal, porcentagem, idUsuario);

    var instrucaoSql = `
    INSERT INTO quiz (pontuacaoFinal, porcentagem, id_usuario)
    VALUES (${pontuacaoFinal}, ${porcentagem}, ${idUsuario});
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    salvarQuiz
};