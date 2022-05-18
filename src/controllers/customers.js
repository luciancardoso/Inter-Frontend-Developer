const CustomersModel = require('../models/customers')
const { crypto } = require('../utils/password')

const defaultTitle = 'Cadastro de Clientes'

function index(req, res){
    res.render('register', {
        title: defaultTitle
    })
}

async function add(req, res){
    const {
        name,
        age,
        email,
        password,
    } = req.body

    const passwordCrypto = await crypto(password)

    const register = new CustomersModel({
        name,
        age,
        email,
        password: passwordCrypto,
    })

    // console.log('ok funiconou')
    // res.send('Cadastro realizado')
    register.save()
    res.render('register', {
        title: defaultTitle,
        message: 'Cadastro realizado com sucesso'
    })
}

async function listUsers(req, res){

    // indo no banco para retorna todos os usuários na nossa View
    // esse metodo ele e assincrono então tenho que passar o async e esse metodo vai
    // retornar um objeto então vou atribuir a uma variavel. const
    const users = await CustomersModel.find()

    res.render('listUsers', {
        title: 'Listagem de Usuários',
        users,
        // users: []
    })
}

module.exports = {
    index,
    add,
    listUsers,
}