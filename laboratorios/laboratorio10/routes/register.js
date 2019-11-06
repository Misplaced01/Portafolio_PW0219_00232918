//conectar las rutas a nuestros metodos, se utiliza un estandar par poder enlazar y decirle a la red API

var express = require('express')
var router = express.Router() //router de express
const RegisterController = require('../controllers/RegisterController')

router.get('/',RegisterController.getAll)
router.get('/:id',RegisterController.getOneById)

router.post('/insert',RegisterController.insert)
router.put('/update',RegisterController.update)
router.delete('/delete',RegisterController.deleteById)

module.exports = router