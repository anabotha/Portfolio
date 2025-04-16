const net = require('net');

// Crear el servidor
const server = net.createServer((socket) => {
    console.log('Cliente conectado');

    socket.on('data', (data) => {
        console.log('Datos recibidos: ' + data);
        socket.write('Respuesta del servidor');
    });

    socket.on('end', () => {
        console.log('Cliente desconectado');
    });
});

// Escuchar en un puerto
server.listen(8080, () => {
    console.log('Servidor escuchando en el puerto 8080');
});

// Crear una conexión como cliente
const client = net.createConnection({ port: 8080 }, () => {
    console.log('Conectado al servidor');
    client.write('Hola servidor!');
});

// Manejar datos recibidos del servidor
client.on('data', (data) => {
    console.log('Respuesta del servidor: ' + data);
    client.end(); // Cerrar la conexión
});
