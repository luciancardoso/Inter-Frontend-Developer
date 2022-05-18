
/**
 * então nosso MODEL chama essa função,
 * ela criptografa a senha, a gente retorna pra ele
 * e ele pega é salva no banco 
 */

const bcrypt = require('bcrypt') 

async function crypto(pwd){
    // const senha = '123455'
    
    const salt = await bcrypt.genSalt();
    const password = await bcrypt.hash(pwd, salt)

    return password
    // console.log(senhaCrypto);
}

module.exports = { 
    crypto
}