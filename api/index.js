const express = require('express')
const cors = require('cors')
const app = express()
const PORT = 8080

app.use(cors())
app.use(express.json())

require('./routes/user.route.js')(app)
require('./routes/list.route.js')(app)

app.listen(PORT, () => console.log(`serveur à l'écoute sur le port ${PORT}`))
