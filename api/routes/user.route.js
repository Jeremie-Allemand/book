module.exports = (app) => {
    const userctrl = require('../controllers/user.controller')
    app.get('/alllist/:id',userctrl.getAllList)
    app.get('/allbook/:id', userctrl.getAllBook)

}