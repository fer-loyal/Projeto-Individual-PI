var database = require("../database/config")

/* Conta quantas linhas existem na tabela quiz -> cada linha = um quiz realizado por alguém*/
function buscarTotalDeQuizzes(){
    var instrucaoSql  = `
    SELECT COUNT (*) AS total FROM quiz;
    `;
    console.log("Executando SQL: " + instrucaoSql);
    return database.executar(instrucaoSql);
}

/* Pega o maior valor de pontuação ja registrado */
function buscarMelhorPontuacao() {
    var instrucaoSql = `
    SELECT MAX(pontuacaoFinal) AS melhor FROM quiz;
    `;
    console.log("Executando SQL: " + instrucaoSql);
    return database.executar(instrucaoSql);
}

/* Tira a média de todas as porcentagens  */
function buscarMediaDeAcertos() {
    var instrucaoSql = `
        SELECT ROUND(AVG(porcentagem), 1) AS media FROM quiz;
    `;
    console.log("Executando SQL: " + instrucaoSql);
    return database.executar(instrucaoSql);
}

/* Verifica se a questao é verdadeira ou falsa (boolean) */
function buscarAcertosPorQuestao(){
    var instrucaoSql = `
    SELECT numero_questao, COUNT(*) AS total_acertos
    FROM resposta
    WHERE acertou = true
    GROUP BY numero_questao
    ORDER BY numero_questao;
    `;
    console.log("Executando SQL: " + instrucaoSql);
    return database.executar(instrucaoSql);
}
module.exports = {
    buscarTotalDeQuizzes,
    buscarMelhorPontuacao,
    buscarMediaDeAcertos,
    buscarAcertosPorQuestao
};