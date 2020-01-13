const connect = require('../base/conection');
const autor= function(Autor){
    this.id_autor = Autor.id_autor;
    this.nombreAutor = Autor.nombre_autor;
};

autor.obtenerTodos = result =>{
    connect.query('Select * from autor',(err,res)=>{
        if(err){
            console.log('Error',err);
            result(-1,err);
            return;
        }
        console.log(res);
        result(1,res);
    })
}

module.exports=autor;