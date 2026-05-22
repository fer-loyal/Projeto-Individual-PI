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

/* Insere uma linha na tabela resposta para cada questao respondida */
/* numero_questao: 1 a 5  --- acertou : boolean*/
function salvarResposta(numeroQuestao, acertou, fkQuiz) {
    console.log("ACESSEI O QUIZ MODEL - function salvarResposta():", numeroQuestao, acertou, fkQuiz);

    var instrucaoSql = `
    INSERT INTO resposta (numero_questao, acertou, fk_quiz)
        VALUES (${numeroQuestao}, ${acertou}, ${fkQuiz});
    `;
    console.log("EXECUTANDO A INSTRUÇÃO SQL: \n" +  instrucaoSql);
    return database.executar(instrucaoSql);
}
module.exports = {
    salvarQuiz,
    salvarResposta
};