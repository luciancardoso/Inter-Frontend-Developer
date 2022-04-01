const express = require('express');
const path = require('path');

const app = express()

// define o template engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'))

// definindo os arquivos públicos
app.use(express.static(path.join(__dirname, 'public')));

// habilita server para receber dados via post (formulário)
app.use(express.urlencoded({ extended: true }));


// rotas
app.use('/', (req, res) => {
    res.render('index', {
        title: 'Pagina Inicial'
    })
})

// 404 erro página não encontrada
app.use('/clientes', (req, res) => { // middleware
    res.send('404 Página não encontrada')
})

//executado o servidor
const port = process.env.PORT || 8080
app.listen(port, () => `Listening at the ${port}`);