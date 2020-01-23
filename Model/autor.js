const connect = require('../base/conection');
const autor = function (Autor) {
    this.id_autor = Autor.id_autor;
    this.nombre_autor = Autor.nombre_autor;
    this.apellido_autor = Autor.apellido_autor;
};

autor.obtenerAutor = result => {
    connect.query('Select * from autor', (err, res) => {
        if (err) {
            console.log('Error', err);
            result(null, err);
            return;
        }
        console.log(res);
        result(null, res);
    })
}
autor.createAutor = (crearAutor, result) => {
    connect.query('Insert into autor set ?', crearAutor, (err, res) => {
        if (err) {
            console.log('Error crear', err);
            result(null, err);
            return;
        }
        console.log(res);
        result(null, res);
    })
}
autor.updateAutor = (id_autor, editarAutor, result) => {
    connect.query('update autor set nombre_autor=?,apellido_autor=? where id_autor=? ',
        [editarAutor.nombre_autor, editarAutor.apellido_autor, id_autor], (err, res) => {
            if (err) {
                console.log('Error update', err);
                result(null, err);
                return;
            }
            else if (res.affectedRows == 0) {
                result({kind:"not_found"}, null);
            }   
            else{
                result(null, res);
            }
        })
}
autor.deleteAutor = (eliminarAutor, result) => {
    connect.query('Delete from autor where ?', eliminarAutor, (err, res) => {
        if (err) {
            console.log('Error eliminar', err);
            result(null, err);
            return;
        }
        console.log(res);
        result(null, res);
    })
}
module.exports = autor;