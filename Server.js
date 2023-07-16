const express = require('express');
const app = express();
const dotenv = require('dotenv');
const emailRoutes = require('./routes/emailRoutes');

const cors = require('cors');



// Configurar CORS
app.use(cors());


// Configuración de variables de entorno
dotenv.config();

// Middleware para el manejo de datos JSON
app.use(express.json());

// Rutas del API de correo electrónico
app.use('/api/email', emailRoutes);

// Puerto del servidor
const port = process.env.PORT || 5000;

// Inicio del servidor
app.listen(port, () => {
    console.log(`Servidor escuchando en el puerto ${port}`);
});