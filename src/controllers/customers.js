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

async function list(req, res){

    // indo no banco para retorna todos os usuários na nossa View
    // esse metodo ele e assincrono então tenho que passar o async e esse metodo vai
    // retornar um objeto então vou atribuir a uma variavel. const
    const users = await CustomersModel.find()

    res.render('list', {
        title: 'Listagem de Usuários',
        users,
        // users: []
    })
}

async function formEdit(req, res){

    const { id } = req.query
    const user = await CustomersModel.findById(id)

    res.render('edit', {
        title: 'Editar Usuário!',
        user,
    })

}

async function edit(req, res){
    const {
        name,
        age,
        email,
    } = req.body

    const { id } = req.params
    const user = await CustomersModel.findById(id)

    user.name = name
    user.age = age
    user.email = email

    user.save()

    res.render('edit', {
        title: 'Editar Usuário',
        user,
        message: 'Usuário Alterado Com Sucesso !'
    })
}

async function remove(req, res){

    const { id } = req.params
    const remove = await CustomersModel.deleteOne({ _id: id })

    if(remove.ok){
        res.redirect('/list')
    }

}

module.exports = {
    index,
    add,
    list,
    formEdit,
    edit,
    remove,
}