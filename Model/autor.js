const connect = require('../base/conection');
const autor= function(Autor){
    this.id_autor = Autor.id_autor;
    this.nombreAutor = Autor.nombre_autor;
};

autor.obtenerAutor = result =>{
    connect.query('Select * from autor',(err,res)=>{
        if(err){
            console.log('Error',err);
            result(null,err);
            return;
        }
        console.log(res);
        result(null,res);
    })
}

module.exports=autor;