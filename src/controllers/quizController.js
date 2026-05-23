var quizModel = require("./quizModel");

function salvarResultado(req, res) {
    var pontuacaoFinal = req.body.pontuacaoFinal;
    var porcentagem = req.body.porcentagem;
    var idUsuario      = req.body.idUsuario;
    var respostas      = req.body.respostas; /* array */

    /* validações aqui */
    if (pontuacaoFinal == undefined){
        return res.status(400).send("pontuacaoFinal está undefined!!");
    }
    else if (porcentagem == undefined){
        return res.status(400).send("porcentagem está undefined!!");
    }
    else if (idUsuario == undefined) {
        return res.status(400).send("idUsuario está undefined!!");
    } 
    else if (respostas == undefined || respostas.length === 0) {
        return res.status(400).send("respostas está undefined ou vazia!");
    }
    
    /* pt1 -> salva o quiz e pega o id que foi gerado pelo auto increment */
    quizModel.salvarQuiz(pontuacaoFinal, porcentagem, idUsuario)
    .then(function (resultadoQuiz) {
        var idQuizGerado = resultadoQuiz.insertId;
        console.log("Quiz salvo com id: " + idQuizGerado);


        /* pt2 ->  faz o INSERT da tabela resposta  */
        var promessasDeResposta = respostas.map(function(resposta){
            return quizModel.salvarResposta(
                resposta.numeroQuestao,
                resposta.acertou,
                idQuizGerado
            );
        });
        return Promise.all(promessasDeResposta);
    })
    .then(function() {
        res.status(201).json({mensagem: "Quiz e respostas salvos com sucesso"});
    })
    .catch(function (erro) {
        console.log("Erro ao salvar resultado do quiz: ", erro);
        res.status(500).json(erro.sqlMessage);
    });
}
module.exports = {
    salvarResultado
};