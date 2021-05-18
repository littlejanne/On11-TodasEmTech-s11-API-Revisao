const router = require('express').Router();
const controller = require('../controllers/loja')



router.use("/all", controller.getAll)
router.use("/", controller.apresentacao)


module.exports = router;