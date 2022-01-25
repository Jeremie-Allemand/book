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
    console.log(req)
    User.createList(req.body.name,req.body.user,(err,data) => {
        if(err)
            res.status(500).send({message: err.message || `erreur serveur lors de la lecture de l'ajout de la list`})
        else
            res.send(data)
    })
}
