const User = require('../models/user.model')
exports.getAllList = (req,res) => {
    console.log(req)
    User.getAllList(req.params.id,(err,data) => {
        if(err)
            res.status(500).send({message: err.message || `erreur serveur lors de la lecture des listes`})
        else
            res.send(data)
    })
}
exports.createList = (req,res) => {
    // console.log(req)
    User.createList(req.body,(err,data) => {
    // User.createList("Test1",2,(err,data) => {
        if(err)
            res.status(500).send({message: err.message || `erreur serveur lors de la creation de la liste`})
        else
            res.send(data)
    })
}
