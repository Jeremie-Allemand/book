module.exports = (app) => {
    const listctrl = require('../controllers/list.controller')
    app.get('/allbook/:id', listctrl.getAllBook)
    app.post('/addbook',listctrl.addBook)
    app.post('/removebook',listctrl.removeBook)
}