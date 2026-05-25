var database = require("../database/config")

function buscarTotalDeQuizzes(fkUsuario){
    var instrucaoSql  = `
        SELECT COUNT(*) AS total FROM quiz WHERE id_usuario = ${fkUsuario};
    `;
    console.log("Executando SQL: " + instrucaoSql);
    return database.executar(instrucaoSql);
}


/* Tira a média de todas as porcentagens  */
function buscarMediaDeAcertos(fkUsuario) {
    var instrucaoSql = `
        SELECT ROUND(AVG(porcentagem), 1) AS media FROM quiz WHERE id_usuario= ${fkUsuario};
    `;
    console.log("Executando SQL: " + instrucaoSql);
    return database.executar(instrucaoSql);
}

/* dados para o gráfico */
function buscarResultadoGrafico(fkUsuario) {
    var instrucaoSql = `
        SELECT pontuacaoFinal,
        DATE_FORMAT(data_horario, '%d/%m/%Y') AS data_formatada
        FROM quiz WHERE id_usuario = ${fkUsuario}
        ORDER BY data_horario DESC LIMIT 8;
    `;
    console.log("Executando SQL: " + instrucaoSql);
    return database.executar(instrucaoSql);
}


module.exports = {
    buscarTotalDeQuizzes,
    buscarMediaDeAcertos,
    buscarResultadoGrafico
};