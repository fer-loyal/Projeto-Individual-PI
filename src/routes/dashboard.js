var express = require("expres");
var router = express.Router();

var dashboardController = require("../controllers/dashboardController");

/* Essa parte que o front ende pega quand faz o GET */
router.get("/dados", function (req, res) {
    dashboardController.buscarDadosDashboard(req, res) ;
});

module.exports = router;