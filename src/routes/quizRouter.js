var express =  require("express");
var router = express.Router();

var quizController = require("../controllers/quizController");
/* recebe os dados do quiz */
router.post("/salvar", function (req, res){
    quizController.salvarResultado(req, res);
});

module.exports = router;