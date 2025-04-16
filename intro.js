const fs = require('fs'); // Asegúrate de importar fs
const express = require('express')
const app = express()


app.get('/', function (req, res) {
    fs.readFile('index.html', 'utf8', (err, data) => {
        if (err) {
            res.status(500).send('Error al leer el archivo');
            return;
        }
        res.send(data); // Envía el contenido de index.html como respuesta
    });
});
app.listen(3000, () => {
    console.log('Servidor corriendo en http://localhost:3000');
    
});
