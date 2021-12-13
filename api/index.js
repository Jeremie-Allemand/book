const express = require('express')
const cors = require('cors')
const app = express()
const PORT = 8080

const process_titi = (req,res) =>{
    res.send("bonjour toto")
}

app.use(cors())
app.use(express.json())

// require('./routes/chat.route.js')(app)

app.listen(PORT, () => console.log(`serveur à l'écoute sur le port ${PORT}`))
