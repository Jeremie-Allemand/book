const List = require('../models/List.model')

exports.getAllBook = (req,res) => {
    console.log(req)
    List.getAllBook(req.params.id,(err,data) => {
        if(err)
            res.status(500).send({message: err.message || `erreur serveur lors de la lecture de ${req.params.nbmsg}  messages`})
        else
            res.send(data)
    })
}