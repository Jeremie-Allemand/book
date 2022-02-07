module.exports = (app) => {
    const userctrl = require('../controllers/user.controller')
    app.get('/alllist/:id',userctrl.getAllList)
    app.post('/createlist',userctrl.createList)
    app.post('/removelist',userctrl.removeList)

}