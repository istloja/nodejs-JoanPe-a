const autor = require('../Model/autor');

exports.obtenerAutor = (req, res) => {
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
        nombre_autor: req.body.nombre_autor,
        apellido_autor: req.body.apellido_autor
    })
    autor.createAutor(createAutor, (err, data) => {
        if (err) {
            res.status(500).json({ mensaje: 'Error crear ' });
        }
        res.send(data);
    })
}


exports.updateAutor = (req, res) => {
    const id_autor = req.body.id_autor
    const editarAutor = new autor(req.body);
    autor.updateAutor(id_autor, editarAutor, (err, data) => {
        if (err) {
            if (err.kind == "not_found") {
                res.status(404).json({ mensaje: 'Error update 404 ' });
            }
            res.status(500).json({ mensaje: 'Error update ' });
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
            res.status(500).json({ mensaje: 'Error delete ' });
        }
        res.send(data);
    })
}