const User = require('../models/user.model')
exports.getAllList = (req,res) => {
    console.log(req)
    User.getAllList(req.params.id,(err,data) => {
        if(err)
            res.status(500).send({message: err.message || `erreur serveur lors de la lecture de ${req.params.nbmsg}  messages`})
        else
            res.send(data)
    })
}

exports.getAllBook = (req,res) => {
    console.log(req)
    User.getAllBook(req.params.id,(err,data) => {
        if(err)
            res.status(500).send({message: err.message || `erreur serveur lors de la lecture de ${req.params.nbmsg}  messages`})
        else
            res.send(data)
    })
}