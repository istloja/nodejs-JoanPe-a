const connect = require('../base/conection');
const autor= function(Autor){
    this.id_autor = Autor.id_autor;
    this.nombre_autor = Autor.nombre_autor;
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
autor.createAutor=(crearAutor,result) =>{
    connect.query('Insert into autor set ?',crearAutor,(err,res)=>{
        if(err){
            console.log('Error crear',err);
            result(null,err);
            return;
        }
        console.log(res);
        result(null,res);
    })
}
module.exports=autor;