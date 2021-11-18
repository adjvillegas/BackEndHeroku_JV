const express = require('express')
const app = express()

app.get('/info', (req, res) => {
    res.send("Server activo");
})

const PORT = process.env.PORT || 8080

const server = app.listen(PORT, () => {
    console.log(`Servidor express escuchando en el puerto ${PORT}`)
})

server.on('error', error => console.log('Error procesado'))