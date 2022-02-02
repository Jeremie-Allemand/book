const List = require('../models/list.model')

exports.getAllBook = (req,res) => {
    console.log(req)
    List.getAllBook(req.params.id,(err,data) => {
        if(err)
            res.status(500).send({message: err.message || `erreur serveur lors de l'affichage des livres `})
        else
            res.send(data)
    })
}


exports.addBook= (req,res) => {
    List.addBook(req.body,(err,data) => {
        if(err)
            res.status(500).send({message: err.message || `erreur serveur lors de l'ajout du livre`})
        else
            res.send(data)
    })
}
