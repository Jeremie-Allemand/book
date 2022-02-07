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


List.addBook = (book,result) => {

    const sqlstr=`call add_book(${book.isbn},${book.listId})`
    pool.query(sqlstr, (err,res) =>{
        if(err){
            result(err,null) 
            return
        }
        result(null,"Success")
    })
}

List.removeBook = (book,result) => {

    const sqlstr=`call remove_book(${book.isbn},${book.listId})`
    pool.query(sqlstr, (err,res) =>{
        if(err){
            result(err,null) 
            return
        }
        result(null,"Success")
    })
}

module.exports = List