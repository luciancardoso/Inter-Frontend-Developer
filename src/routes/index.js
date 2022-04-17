const router = require('express').Router()

// rotas
router.use('/', (req, res) => {
    res.render('index', {
        title: 'Pagina Inicial'
    })
})

module.exports = router