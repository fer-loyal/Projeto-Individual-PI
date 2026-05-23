var dashboardModel = require("./dashboardModel");

function buscarDadosDashboard(req, res) {
    /* Promise.all executa as 4 queries ao mesmo tempo -> só responde quando todas terminaram se serem executadas */
    Promise.all([
        dashboardModel.buscarTotalDeQuizzes(),
        dashboardModel.buscarMelhorPontuacao(),
        dashboardModel.buscarMediaDeAcertos(),
        dashboardModel.buscarAcertosPorQuestao()
    ])
    .then(function (resultados) {
        /* resultados [0] vai ser o retorno da primeira query e assim vai seguir*/
        res.json({
            total:  resultados[0][0].total,
            melhorPontuacao:  resultados[1][0].melhor,
            mediaAcertos: resultados[2][0].media,
            acertosPorQuestao: resultados[3]
        });
    })
    .catch(function (erro){
        console.log("Erro ao buscar dados da dashboard! : ", erro);
        res.status(500).json(erro.sqlMessage);
    });
}


module.exports = {
    buscarDadosDashboard
};