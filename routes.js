
module.exports=app=>{
    const autor = require('./Controller/controller_autor');
    app.post('/obtenerAutor',autor.obtenerAutor);

    app.post('/createAutor',autor.createAutor);
}
