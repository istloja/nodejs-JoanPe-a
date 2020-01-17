const autor = require('../Model/autor');

exports.obtenerAutor = (req, res) => {
    autor.obtenerAutor((err, data) => {
        if (err) {
            res.status(500).json({ mensaje: 'Error' });
        }
        res.send(data);
    })
}
