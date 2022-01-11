const Pool = require('pg').Pool
const dbconfig = require('../db.config.js')

const pool = new Pool({
    user: dbconfig.USER,
    host: dbconfig.HOST,
    database: dbconfig.DB,
    password: dbconfig.PASSWORD,
    port: dbconfig.PORT,
})

module.exports = pool