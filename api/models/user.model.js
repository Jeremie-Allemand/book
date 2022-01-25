const pool = require("./db.js")

const User = (user) => {
    this.name = user.name
    this.password = user.password
}


User.getAllList = (id,result) => {
 
    const sqlstr = `select list.id_list,list.name from public.user 
	join public.user_list on public.user.id_user = public.user_list.id_user 
	join public.list on public.user_list.id_list = public.list.id_list 
	where public.user.id_user = ${id}`
    pool.query(sqlstr, (err,res) => {
        if(err){
            result(err,null)
            return
        }
        result(null, res.rows)
    })
}

User.createList = (name,id,result) => {

    const sqlstr=`call create_list(${name},${id})`
    pool.query(sqlstr, (err,res) =>{
        if(err){
            result(err,null)
            return
        }
        list.id = res.rows[0].id
        result(null,list)
    })
}

module.exports = User