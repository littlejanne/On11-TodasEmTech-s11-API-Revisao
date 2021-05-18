const metodos = require("../utilis/metodos")
const package = require('../../package.json')
const database = require('../models/database.json')

const apresentacao = (req, res) => {

    const { name , version, description, author} = package;
    res.status(200).send({
        mensagem : `Bem vindos ao servidor ${name}`,
        informacoes : "Para mais informações leia o README.md",
        author,
        version,
        description
    })
}

const getAll = (req, res) => res.status(200).send(database)


module.exports = {
    apresentacao,
    getAll
}