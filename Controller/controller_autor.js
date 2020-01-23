const autor = require('../Model/autor');

exports.obtenerAutor = (req, res) => {
    console.log(req.body.id_autor)
    autor.obtenerAutor((err, data) => {
        if (err) {
            res.status(500).json({ mensaje: 'Error' });
        }

        res.send(data);
    })
}
exports.createAutor = (req, res) => {
    const createAutor = new autor({
        id_autor: req.body.id_autor,
        nombre_autor: req.body.nombre_autor
    })
    autor.createAutor(createAutor, (err, data) => {
        if (err) {
            res.status(500).json({ mensaje: 'Error crear ' });
        }
        res.send(data);
    })
}
exports.deleteAutor = (req, res) => {
    const deleteAutor = {
        id_autor: req.body.id_autor
    }
    autor.deleteAutor(deleteAutor, (err, data) => {
        if (err) {
            res.status(500).json({ mensaje: 'Error crear ' });
        }
        res.send(data);
    })
}