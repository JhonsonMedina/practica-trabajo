const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;
const cors = require('cors');
const { getArticulos, createArticulo, updateArticulo, deleteArticulo } = require('./routes/articulos');

require('dotenv').config();
const path = require('path');

// Middleware
app.use(express.json());
app.use(cors());
// Rutas
app.get('/api/articulos', getArticulos);
app.post('/api/articulos', createArticulo);
app.put('/api/articulos/:id', updateArticulo);
app.delete('/api/articulos/:id', deleteArticulo);

// Servir frontend si tienes assets estáticos (opcional)
// app.use(express.static(path.join(__dirname, 'public')));

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});