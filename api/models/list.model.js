const pool = require("./db.js")

const List = (list) => {
    this.name = list.name
}

List.getAllBook = (id,result) => {
    const sqlstr = `select list_isbn.isbn from public.list_isbn 
                        where list_isbn.id_list = ${id}`
    pool.query(sqlstr, (err,res) => {
        if(err){
            result(err,null)
            return
        }
        result(null, res.rows)
    })
}

module.exports = List