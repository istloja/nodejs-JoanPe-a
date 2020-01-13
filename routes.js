
module.exports=app=>{
    const autor = require('./Model/autor');
    app.post('/obtenerAutor',autor.obtenerTodos);
}
