var dashboardModel = require("../models/dashboardModel");

function buscarTotalDeQuizzes(req, res) {
    
    
    var fkUsuario = req.params.fkUsuario;

    console.log(fkUsuario);
    

    dashboardModel.buscarTotalDeQuizzes(fkUsuario).then(function (resultado) 
    {
        console.log(resultado);
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

function buscarMediaDeAcertos(req, res) {
    
    
    var fkUsuario = req.params.fkUsuario;

    console.log(fkUsuario);
    

    dashboardModel.buscarMediaDeAcertos(fkUsuario).then(function (resultado) 
    {
        console.log(resultado);
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


function buscarResultadoGrafico(req, res) {
    
    
    var fkUsuario = req.params.fkUsuario;

    console.log(fkUsuario);
    

    dashboardModel.buscarResultadoGrafico(fkUsuario).then(function (resultado) 
    {
        console.log(resultado);
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
   buscarTotalDeQuizzes,
   buscarMediaDeAcertos,
   buscarResultadoGrafico
};