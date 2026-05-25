var express = require("express");
var router = express.Router();

var dashboardController = require("../controllers/dashboardController");

/* Essa parte que o front ende pega quand faz o GET */

router.get("/total-quizzes/:fkUsuario", function (req, res) {
    dashboardController.buscarTotalDeQuizzes(req, res) ;
});

router.get("/media-quizzes/:fkUsuario", function (req, res) {
    dashboardController.buscarMediaDeAcertos(req, res) ;
});

router.get("/grafico-quizzes/:fkUsuario", function (req, res) {
    dashboardController.buscarResultadoGrafico(req, res) ;
});

module.exports = router;