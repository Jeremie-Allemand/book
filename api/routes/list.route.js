module.exports = (app) => {
    const listctrl = require('../controllers/list.controller')
    app.get('/allbook/:id', listctrl.getAllBook)

}