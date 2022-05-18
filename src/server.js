const express = require('express');
const path = require('path');

const db = require('./database');
const routes = require('./routes');

const app = express();

// conexão com o banco de dados
db.connect();

// define o template engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'))

// definindo os arquivos públicos
app.use(express.static(path.join(__dirname, 'public')));

// habilita server para receber dados via post (formulário)
app.use(express.urlencoded({ extended: true }));

// definindo as rotas
app.use('/', routes);

// 404 erro página não encontrada
app.use('/clientes', (req, res) => { // middleware
    res.send('404 Página não encontrada')
})

//executado o servidor
const port = process.env.PORT || 8080
app.listen(port, () => `Listening at the ${port}`);