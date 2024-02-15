const mongoose = require('mongoose')
mongoose.Promise = global.Promise 
module.exports = mongoose.createConnection('mongodb+srv://danielasmelo232:<password>@mymoney-backend.hwajhnf.mongodb.net/'
)

mongoose.Error.messages.general.required = "O atributo '{PATH}' é obrigatório."
mongoose.Error.messages.Number.min = 
    "O '{VALUE}' informado é menor que o limite mínimo de '{MIN}'."
mongoose.Error.messages.Number.max = 
    "O '{VALUE}' informado é maior que o limite máximo de '{MAX}'."
mongoose.Error.messages.String.enum = 
    "'{VALUE}' não é válido para o atributo '{PATH}'."

/*const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://danielasmelo232:<password>@mymoney-backend.hwajhn

/**const mongoose = require('mongoose')
const url = process.env.MONGODB_URI ? process.env.MONGODB_URI : 'mongodb//localhost/mymoney'
module.exports = mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true}) */
