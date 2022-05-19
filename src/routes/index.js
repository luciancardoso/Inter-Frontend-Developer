const router = require('express').Router()

const CustomersController = require('../controllers/customers')
const IndexController = require('../controllers/index')

// rotas - os EndPoints
router.get('/', IndexController.index)

// register
router.get('/register', CustomersController.index)
router.post('/register/add', CustomersController.add)

// listar
router.get('/list', CustomersController.list)

// editar
router.get('/edit', CustomersController.formEdit)
router.post('/edit/:id', CustomersController.edit)

// remove
router.get('/remove/:id', CustomersController.remove)

module.exports = router