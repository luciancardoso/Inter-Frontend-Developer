const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    name: String,
    age: Number,
    email: String,
    password: String,
})

const Model = mongoose.model('customers', schema)

const register = new Model({
    name: 'Lucian',
    age: 30,
    email: 'lucianteste@gmail.com',
    password: '123456',
})

register.save()